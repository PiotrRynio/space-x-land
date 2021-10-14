// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppProvider } from '../context/AppContext';
import React from 'react';
import { theme } from '../assets/styles/theme';
import { GlobalStyles } from '../assets/styles/GlobalStyles';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';

type AddTestsWrappers = { toBeWrappedComponent: any; others?: any };

export const addTestsWrappers = ({ toBeWrappedComponent }: AddTestsWrappers) => {
  const queryClient = new QueryClient();
  const history = createMemoryHistory();

  const InitialHelmet = () => (
    <Helmet>
      <title>Space Land - HOME</title>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
      </style>
    </Helmet>
  );

  const componentWithTestsWrappers = () => (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyles theme={theme} />
            <InitialHelmet />
            <QueryClientProvider client={queryClient}>
              <Router history={history}>{toBeWrappedComponent}</Router>
            </QueryClientProvider>
          </ThemeProvider>
        </AppProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );

  return { componentWithTestsWrappers };
};
