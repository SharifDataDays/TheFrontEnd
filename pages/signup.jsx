import React, { Component } from 'react';
import Head from 'next/head';
import SignupContainer from '~/components/signup/signupContainer';

class SignupPage extends Component {
  render() {
    return (
      <>
        <Head>
          <title>ثبت نام - DataDays 2020</title>
        </Head>
        <SignupContainer />
      </>
    );
  }
}

export default SignupPage;
