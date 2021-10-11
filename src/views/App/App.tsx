import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyles } from '../../assets/styles/GlobalStyles';
import { Body1 } from './App.styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>
        HelloWorld
        <Body1>Let's do it!</Body1>
      </div>
    </ThemeProvider>
  );
}

export default App;
