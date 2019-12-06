import React, { Component } from 'react';
import SignupContainer from '../components/signup/signupContainer'
import Head from 'next/head';

class SignupPage extends Component {
  render() {
    return (
      <div>
        <Head>
          <style>{'body {background-color : #95d1fc}'}</style>
        </Head>
        <SignupContainer/>
      </div>
    );
  }
}

export default SignupPage;
