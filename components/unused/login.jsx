import React from 'react';
import Head from 'next/head';
import Container from '../components/login/container';

function LoginPage() {
  return (
    <div>
      <Head>
        <title>login</title>
        <style>{'body {background-color : #95d1fc}'}</style>
      </Head>
      <Container />
    </div>
  );
}

export default LoginPage;
