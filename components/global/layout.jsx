import '~/.semantic/dist/semantic.rtl.min.css';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Container } from 'semantic-ui-react';
import GlobalStyle from './globalStyles';
import theme from '~/theme';

/*
const Container = styled(C)`
  width: 100% !important;
  margin: 0 !important;
`;
*/

function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container
        style={{ width: '100% !important', margin: '0 !important', minHeight: '100vh' }}
        fluid
      >
        {children}
      </Container>
    </ThemeProvider>
  );
}

export default Layout;
