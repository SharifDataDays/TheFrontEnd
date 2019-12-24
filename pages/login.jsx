import React from 'react';
import Head from 'next/head';
import Container from '../components/login/loginContainer';

function LoginPage() {
  return (
    <div>
      <Head>
        <title>login</title>
      </Head>
      <Container />
    </div>
  );
}

export default LoginPage;
