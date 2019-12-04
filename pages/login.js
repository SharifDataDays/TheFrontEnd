import React, { Component } from 'react';
import LoginContainer from '../components/login/loginContainer'
import Head from 'next/head';

class LoginPage extends Component {
  render() {
    return (
      <div>
        <Head>
          <style>{'body {background-color : #95d1fc}'}</style>
        </Head>
        <LoginContainer/>
      </div>
    );
  }
}

export default LoginPage;
