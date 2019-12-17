import '~/.semantic/dist/semantic.rtl.min.css';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Container } from 'semantic-ui-react';
import GlobalStyle from './globalStyles';
import theme from '~/theme';

function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container fluid>{children}</Container>
    </ThemeProvider>
  );
}

export default Layout;
