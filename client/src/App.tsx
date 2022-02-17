import React from 'react';

import { Button } from 'antd';
import { ThemeProvider } from 'styled-components';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { GlobalStyle } from './styles';
import { useTheme } from './useTheme';
import { Content } from './components/Content';

import 'antd/dist/antd.css';

function App() {
  const { theme, changeTheme } = useTheme();

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <Content changeThemeHandler={changeTheme} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
