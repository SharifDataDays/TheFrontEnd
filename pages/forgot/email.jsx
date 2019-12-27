/* eslint-disable react/prefer-stateless-function */
import Head from 'next/head';
import React, { Component } from 'react';
import withLogged from '~/components/global/auth/withLogged';
import Container from '~/components/user/forgot/email/container';

class LoginPage extends Component {
  render() {
    return (
      <>
        <Head>
          <title>فراموشی رمز عبور - DataDays 2020</title>
        </Head>
        <Container />
      </>
    );
  }
}

export default withLogged(LoginPage);
