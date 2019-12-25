/* eslint-disable react/prefer-stateless-function */
import Head from 'next/head';
import React, { Component } from 'react';
import withLogged from '~/components/global/auth/withLogged';
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

export default withLogged(LoginPage);
