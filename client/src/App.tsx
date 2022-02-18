import React from 'react';

import { Button } from 'antd';
import { ThemeProvider } from 'styled-components';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { GlobalStyle } from './styles';
import { useTheme } from './useTheme';
import { UsersPage } from './pages/Users';

import 'antd/dist/antd.css';

function App() {
  const { theme, changeTheme } = useTheme();

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <UsersPage changeThemeHandler={changeTheme} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
