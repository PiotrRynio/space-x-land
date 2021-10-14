import { render, screen, waitForElementToBeRemoved, fireEvent } from '@testing-library/react';
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
    const displayedStatus = screen.queryByRole(`status`);

    expect(displayedStatus).toHaveTextContent(/Loading.../i);
  });

  test(`when spacecrafts items are fetched, then list of items is displayed`, async () => {
    const { componentWithTestsWrappers } = addTestsWrappers({
      toBeWrappedComponent: <Home />,
    });
    render(componentWithTestsWrappers());

    await waitForElementToBeRemoved(() => screen.getByRole(`status`));

    const article1 = screen.queryByText(/Second GTO launch for Falcon 9/i);
    const article2 = screen.queryByText(/Total payload mass was 2,034 kg/i);
    const article3 = screen.queryByText(/failure at 33 seconds/i);
    const article4 = screen.queryByText(/Commercial mission and first Falcon 9/i);
    expect(article1).toBeInTheDocument();
    expect(article2).toBeInTheDocument();
    expect(article3).toBeInTheDocument();
    expect(article4).toBeInTheDocument();
  });

  test(`when spacecrafts items are fetched, then in list is 6 items`, async () => {
    const { componentWithTestsWrappers } = addTestsWrappers({
      toBeWrappedComponent: <Home />,
    });
    render(componentWithTestsWrappers());

    await waitForElementToBeRemoved(() => screen.queryByRole(`status`));

    const spacecraftItems = screen.queryAllByTestId('spacecraft-list-item');
    expect(spacecraftItems.length).toBe(6);
  });

  test(`when spacecrafts items are fetched and user click on button "2" on paginate, then second page of items will displayed`, async () => {
    const { componentWithTestsWrappers } = addTestsWrappers({
      toBeWrappedComponent: <Home />,
    });
    render(componentWithTestsWrappers());
    await waitForElementToBeRemoved(() => screen.queryByRole(`status`));

    fireEvent.click(screen.getByLabelText(/Page 2/i));

    const article1 = screen.queryByText(/launch was Boeing'/i);
    const article2 = screen.queryByText(/TürkmenÄlem 52°E/i);
    const article3 = screen.queryByText(/Launch performance was nominal until an/i);
    const article4 = screen.queryByText(/NEXT Mission/i);
    expect(article1).toBeInTheDocument();
    expect(article2).toBeInTheDocument();
    expect(article3).toBeInTheDocument();
    expect(article4).toBeInTheDocument();
  });
});
