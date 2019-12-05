import React from 'react';
import Head from 'next/head';
import Nav from '~/components/global/navbar';
import GlobalStyle from '~/components/global/globalStyles';
import HeaderImage from '~/components/header-image';
import Posts from '~/components/post-container';

const Home = () => (
  <>
    <GlobalStyle />
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />
    <HeaderImage />
    <Posts />
  </>
);

export default Home;

// font: FreightSans, Helvetica Neue, Helvetica, Arial, sans-serif;
