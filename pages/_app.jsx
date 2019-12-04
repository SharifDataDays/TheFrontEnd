// @flow
import App from 'next/app';
import React from 'react';
import type { Node } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '~/theme';
import GlobalStyle from '~/components/global/globalStyles';
import Navbar from '~/components/global/navbar';

function Layout({ children }: { children: Node }): Node {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      {children}
    </ThemeProvider>
  );
}

export default class MyApp extends App {
  render(): Node {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    );
  }
}
