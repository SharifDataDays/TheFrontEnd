import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '~/theme';
import GlobalStyle from '~/components/global/globalStyles';
import Navbar from '~/components/global/navbar';

function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      {children}
    </ThemeProvider>
  );
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    );
  }
}
