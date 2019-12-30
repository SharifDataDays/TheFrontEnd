import _ from 'lodash';
import Head from 'next/head';
import Router from 'next/router';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dimmer } from 'semantic-ui-react';
import { ClipLoader } from 'react-spinners';
import { authorizeAction } from '~/redux/actions/auth';

function withAuth(loggedIn) {
  return (WrappedComponent) => {
    class Wrapper extends Component {
      static async getInitialProps(ctx) {
        const pageProps =
          (await WrappedComponent.getInitialProps) && (await WrappedComponent.getInitialProps(ctx));
        return { ...pageProps };
      }

      componentDidMount() {
        const { authorize } = this.props;
        authorize();
      }

      render() {
        const { auth } = this.props;

        if (auth.loading) {
          return (
            <>
              <Head>
                <title>DataDays 2020</title>
              </Head>
              <Dimmer active={auth.loading}>
                <ClipLoader size={75} color="#fff" loading={auth.loading} />
              </Dimmer>
            </>
          );
        }
        if (_.isEmpty(auth.token) && loggedIn) {
          Router.push('/login');
        }
        if (!_.isEmpty(auth.token) && !loggedIn) {
          Router.push('/dashboard/tasks');
        }
        return <WrappedComponent {...this.props} />;
      }
    }

    function mapStateToProps(state, ownProps) {
      const { auth } = state;
      return {
        auth,
      };
    }

    function mapDispatchToProps(dispatch, ownProps) {
      return {
        authorize: () => dispatch(authorizeAction()),
      };
    }

    return connect(mapStateToProps, mapDispatchToProps)(Wrapper);
  };
}

export default withAuth;
