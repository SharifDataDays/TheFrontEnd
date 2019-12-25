/* eslint-disable react/prefer-stateless-function */
import Head from 'next/head';
import React, { Component } from 'react';
import withLoggedIn from '~/components/global/auth/withLoggedIn';
import Container from '~/components/user/login/container';

class LoginPage extends Component {
  render() {
    return (
      <>
        <Head>
          <title>ورود - DataDays 2020</title>
        </Head>
        <Container />
      </>
    );
  }
}

export default withLoggedIn(LoginPage);
