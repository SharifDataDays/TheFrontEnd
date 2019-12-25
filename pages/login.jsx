import React from 'react';
import Head from 'next/head';
import Container from '../components/login/loginContainer';

function LoginPage() {
  return (
    <div>
      <Head>
        <title>ورود - DataDays 2020</title>
      </Head>
      <Container />
    </div>
  );
}

export default LoginPage;
