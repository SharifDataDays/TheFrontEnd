/* eslint-disable react/prefer-stateless-function */
import _ from 'lodash';
import Head from 'next/head';
import Router from 'next/router';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '~/components/user/login/container';
import { loginAction } from '~/redux/actions/auth';
import { authorizeAction } from '~/redux/actions/auth';

class LoginPage extends Component {
  static async getInitialProps({ store }) {
    store.dispatch(authorizeAction(store.getState().auth.token));
    return {};
  }

  componentDidMount() {
    const { auth } = this.props;
    if (!_.isEmpty(auth.token)) {
      Router.push('/dashboard/tasks', '/dashboard/tasks', { shallow: false });
    }
  }

  render() {
    const { auth, login } = this.props;
    return (
      <>
        <Head>
          <title>ورود - DataDays 2020</title>
        </Head>
        <Container auth={auth} login={login} />
      </>
    );
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
    login: (username, password) => dispatch(loginAction(username, password)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
