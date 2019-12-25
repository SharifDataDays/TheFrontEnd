/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Head from 'next/head';
import Container from '../components/login/loginContainer';

class LoginPage extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>ورود - DataDays 2020</title>
        </Head>
        <Container />
      </div>
    );
  }
}

export default LoginPage;
