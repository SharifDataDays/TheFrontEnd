import '~/.semantic/dist/semantic.rtl.min.css';
import React from 'react';
import { Container } from 'semantic-ui-react';
import GlobalStyle from './globalStyles';

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Container fluid>{children}</Container>
    </>
  );
}

export default Layout;
