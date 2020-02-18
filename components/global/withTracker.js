import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { authorizeAction } from '~/redux/actions/auth';
import cookie from 'js-cookie';
import _ from 'lodash';

function getSSRToken(headerCookies) {
  let token = '';
  _.forEach(_.split(headerCookies, ' '), (headerCookie) => {
    const key = headerCookie.split('=')[0];
    const value = _.replace(headerCookie.split('=')[1], ';', '');
    if (key === 'token' && value !== '%5Bobject%20Object%5D') {
      token = value;
    }
  });
  return token;
}

export default function withTracker() {
  return (WrappedComponent, options = {}) => {
    const trackPage = () => {
      const page = window.location.pathname + window.location.search;

      ReactGA.set({
        page,
        ...options,
      });
      ReactGA.pageview(page);
    };

    const HOC = class extends Component {
      static async getInitialProps(ctx) {
        const { store, isServer, req } = ctx;
        const token = isServer ? getSSRToken(req.headers.cookie) : cookie.get('token');

        await store.dispatch(authorizeAction(token));

        const pageProps =
          (await WrappedComponent.getInitialProps) &&
          (await WrappedComponent.getInitialProps(ctx, token));
        return { ...pageProps, isServer };
      }

      componentDidMount() {
        trackPage();
      }

      render() {
        return <WrappedComponent {...this.props} />;
      }
    };

    return HOC;
  };
}
