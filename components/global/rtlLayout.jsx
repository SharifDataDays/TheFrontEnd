import '~/.semantic/dist/semantic.rtl.min.css';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Container } from 'semantic-ui-react';
import theme from '~/theme';
import Navbar from '~/components/global/navbar';
import Footer from '~/components/global/footer';

function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container fluid>{children}</Container>
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;
