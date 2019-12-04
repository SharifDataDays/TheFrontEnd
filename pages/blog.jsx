import React from 'react';
import Head from 'next/head';
import Nav from '~/components/global/navbar';
import GlobalStyle from '~/components/global/globalStyles';
import HeaderImage from '~/components/header-image';

const Home = () => (
  <>
    <GlobalStyle />
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />
    <HeaderImage />
  </>
);

export default Home;
