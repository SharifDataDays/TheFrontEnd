import 'semantic-ui-css/semantic.min.css';
import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Container } from 'semantic-ui-react';
import theme from '~/theme';
import GlobalStyle from '~/components/global/globalStyles';
import Navbar from '~/components/global/navbar';
import Footer from '~/components/global/footer';
import { appWithTranslation } from '~/i18n';

function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container fluid>{children}</Container>
      <Footer />
    </ThemeProvider>
  );
}

class MyApp extends App {
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

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps };
};

export default appWithTranslation(MyApp);
