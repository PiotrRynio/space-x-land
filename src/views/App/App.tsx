import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { theme } from 'assets/styles/theme';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { AppProvider } from 'context/AppContext';
import Home from 'views/Home/Home';
import Navbar from 'components/organisms/Navbar/Navbar';
import { MainContentWrapper, NavWrapper, Wrapper } from './App.styles';
import BackgroundWrapper from './BackgroundWrapper';

const queryClient = new QueryClient();

const InitialHelmet = () => (
  <Helmet>
    <title>Space Land - HOME</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
    </style>
  </Helmet>
);

function App() {
  return (
    <HelmetProvider>
      <InitialHelmet />
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <AppProvider>
            <Router>
              <Wrapper>
                <BackgroundWrapper>
                  <NavWrapper>
                    <Navbar />
                  </NavWrapper>
                  <MainContentWrapper>
                    <Home />
                  </MainContentWrapper>
                </BackgroundWrapper>
              </Wrapper>
            </Router>
          </AppProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
