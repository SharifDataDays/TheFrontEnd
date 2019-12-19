import 'semantic-ui-css/semantic.min.css';
import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import makeStore from '~/redux/store';
import Layout from '~/components/global/layout';

class MyApp extends App {
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  }
}

export default withRedux(makeStore)(MyApp);
