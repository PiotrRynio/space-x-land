import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { theme } from 'assets/styles/theme';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { AppProvider } from 'context/AppContext';
import Home from 'views/Home/Home';
import Navbar from 'components/organisms/Navbar/Navbar';
import { MainContentWrapper, NavWrapper, Wrapper } from './App.styles';
import BackgroundWrapper from './BackgroundWrapper';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <Router>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
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
          </ThemeProvider>
        </Router>
      </AppProvider>
    </QueryClientProvider>
  );
}

export default App;
