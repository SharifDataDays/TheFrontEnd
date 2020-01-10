import Head from 'next/head';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import withAuth from '~/components/global/withAuth';
import Container from '~/components/user/login/container';
import { loginClearAction, loginAction } from '~/redux/actions/auth';

class LoginPage extends Component {
  componentDidMount() {
    const { clear } = this.props;
    clear();
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
    clear: () => dispatch(loginClearAction()),
    login: (username, password) => dispatch(loginAction(username, password)),
  };
}

export default withAuth(false)(connect(mapStateToProps, mapDispatchToProps)(LoginPage));
