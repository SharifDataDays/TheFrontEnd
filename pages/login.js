import React, { Component } from 'react';
import LoginContainer from '../components/login/loginContainer'
import Head from 'next/head';
import SingupBox from '../components/login/signupBox';
import LoginSignUpContainer from '../components/login/loginSignupContainer';

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
