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
import FavoritesItemsWidget from 'components/organisms/FavoriesItemsWidget/FavoritesItemsWidget';
import { NavWrapper, Wrapper } from './App.styles';
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
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyles theme={theme} />
            <InitialHelmet />
            <Router>
              <Wrapper>
                <BackgroundWrapper>
                  <NavWrapper>
                    <Navbar />
                  </NavWrapper>
                  <Home />
                </BackgroundWrapper>
                <FavoritesItemsWidget />
              </Wrapper>
            </Router>
          </ThemeProvider>
        </AppProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
