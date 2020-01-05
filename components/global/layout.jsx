import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Container } from 'semantic-ui-react';
import GlobalStyle from './globalStyles';
import Navbar from './navbar';
import Footer from './footer';
import theme from '~/theme';

function Layout({ children, hasNavbar, hasFooter, token }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {hasNavbar && <Navbar token={token} />}
      <Container
        style={{ width: '100% !important', margin: '0 !important', minHeight: '100vh' }}
        fluid
      >
        {children}
      </Container>
      {hasFooter && <Footer />}
    </ThemeProvider>
  );
}

export default Layout;
