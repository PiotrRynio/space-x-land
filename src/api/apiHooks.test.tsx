import { renderHook } from '@testing-library/react-hooks';
import { setupServer } from 'msw/node';
import { QueryClient, QueryClientProvider } from 'react-query';
import { handlers } from 'mock/msw/handlers/space-x-land/handlers';
import { useSpacecraftListItemProps } from './apiHooks';
import { launchesHandlerResponse } from '../mock/msw/handlers/space-x-land/responses/launches/launchesHandlerResponse';

const createWrapper = () => {
  // ✅ creates a new QueryClient for each test
  const queryClient = new QueryClient();
  return ({ children }: { children: any }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe('Api Hooks tests:', () => {
  const server = setupServer(...handlers);

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  describe('useCountriesNames', () => {
    test(`if you call hook, then fetching is loading`, async () => {
      const { result } = renderHook(() => useSpacecraftListItemProps(), {
        wrapper: createWrapper(),
      });
      expect(result.current.isLoading).toBe(true);
    });

    test('if you call hook without param, after waiting for data, then fetching data is finished wih success,', async () => {
      const { result, waitFor } = renderHook(() => useSpacecraftListItemProps(), {
        wrapper: createWrapper(),
      });

      await waitFor(() => result.current.isSuccess);

      const { error, isLoading, isLoadingError, isSuccess } = result.current;
      expect(isLoading).toBe(false);
      expect(error).toBe(null);
      expect(isLoadingError).toBe(false);
      expect(isSuccess).toBe(true);
    });

    test('if you call hook with param, after waiting for data, then fetching data is finished wih success.', async () => {
      const { result, waitFor } = renderHook(() => useSpacecraftListItemProps(12), {
        wrapper: createWrapper(),
      });

      await waitFor(() => result.current.isSuccess);

      expect(result.current.isSuccess).toBe(true);
    });

    test('if you call hook without param, after waiting for data, then you will receive correct data,', async () => {
      const { result, waitFor } = renderHook(() => useSpacecraftListItemProps(), {
        wrapper: createWrapper(),
      });

      await waitFor(() => result.current.isSuccess);

      expect(result.current.data?.length).toEqual(launchesHandlerResponse.length);
    });
  });
});
