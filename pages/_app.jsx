import '~/.semantic/dist/semantic.rtl.min.css';
import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { PersistGate } from 'redux-persist/integration/react';
import makeStore from '~/redux/store';
import Layout from '~/components/global/layout';
import ReactGA from 'react-ga';

const trackingId = 'UA-158271881-1';
ReactGA.initialize(trackingId);


class MyApp extends App {
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <PersistGate persistor={store.__PERSISTOR} loading={null}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
    );
  }
}

export default withRedux(makeStore)(MyApp);
