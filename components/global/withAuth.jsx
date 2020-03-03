import _ from 'lodash';
import Head from 'next/head';
import Router from 'next/router';
import cookie from 'js-cookie';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dimmer } from 'semantic-ui-react';
import { ClipLoader } from 'react-spinners';
import { authorizeAction } from '~/redux/actions/auth';
import withTracker from './withTracker';

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

function withAuth(loggedIn) {
  return (WrappedComponent) => {
    class Wrapper extends Component {
      static async getInitialProps(ctx) {
        const { store, isServer, req } = ctx;
        const token = isServer ? getSSRToken(req.headers.cookie) : cookie.get('token');

        await store.dispatch(authorizeAction(token));

        const pageProps =
          (await WrappedComponent.getInitialProps) &&
          (await WrappedComponent.getInitialProps(ctx, token));
        return { ...pageProps, isServer };
      }

      render() {
        const { page, auth } = this.props;

        const pageLoading =
          page.loading || (auth.authorized && !loggedIn) || (!auth.authorized && loggedIn);
        if (_.isUndefined(loggedIn)) {
          return (
            <>
              <Head>
                <title>DataDays 2020</title>
              </Head>
              <WrappedComponent {...this.props} />
            </>
          );
        }
        if (!auth.authorized && loggedIn) {
          Router.push('/login', '/login', { shallow: false });
        }
        if (auth.authorized && !loggedIn) {
          Router.push('/dashboard', '/dashboard', { shallow: false });
        }
        
        return (
          <>
            <Head>
              <title>DataDays 2020</title>
            </Head>
            <Dimmer active={pageLoading} page>
              <ClipLoader size={75} color="#fff" loading={pageLoading} />
            </Dimmer>
            <WrappedComponent {...this.props} />
          </>
        );
      }
    }

    function mapStateToProps(state, ownProps) {
      const { page, auth } = state;
      return {
        page,
        auth,
      };
    }

    return withTracker()(connect(mapStateToProps, null)(Wrapper));
  };
}

export default withAuth;
