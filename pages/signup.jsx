/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Head from 'next/head';
import withLogged from '~/components/global/auth/withLogged';
import Container from '~/components/user/signup/container';

class SignupPage extends Component {
  render() {
    return (
      <>
        <Head>
          <title>ثبت نام - DataDays 2020</title>
        </Head>
        <Container />
      </>
    );
  }
}

export default withLogged(SignupPage);
