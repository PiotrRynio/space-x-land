import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { handlers } from 'mock/msw/handlers/space-x-land/handlers';
import Home from './Home';
import { addTestsWrappers } from '../../testHelpers/testsProviders';

describe('Home page:', () => {
  const server = setupServer(...handlers);

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test(`when data are not fetched yet, then loading text information is displayed`, async () => {
    const { componentWithTestsWrappers } = addTestsWrappers({
      toBeWrappedComponent: <Home />,
    });
    render(componentWithTestsWrappers());
    const displayedStatus = screen.getByRole(`status`);

    const searchedText = /Loading.../i;
    expect(displayedStatus).toHaveTextContent(searchedText);
  });

  test(`when spacecrafts items are fetched, then list of items is displayed`, async () => {
    const { componentWithTestsWrappers } = addTestsWrappers({
      toBeWrappedComponent: <Home />,
    });
    render(componentWithTestsWrappers());

    await waitForElementToBeRemoved(() => screen.getByRole(`status`));

    const country1 = screen.queryByText(/Second GTO launch for Falcon 9/i);
    const country2 = screen.queryByText(/Total payload mass was 2,034 kg/i);
    const country3 = screen.queryByText(/failure at 33 seconds/i);
    const country4 = screen.queryByText(/Commercial mission and first Falcon 9/i);
    expect(country1).toBeInTheDocument();
    expect(country2).toBeInTheDocument();
    expect(country3).toBeInTheDocument();
    expect(country4).toBeInTheDocument();
  });
});
