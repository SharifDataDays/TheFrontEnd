import React from 'react';
import Head from 'next/head';
import HeaderImage from '~/components/blog/headerImage';
import Posts from '~/components/blog/posts';

const Home = () => (
  <>
    <Head>
      <title>Blog</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <HeaderImage />
    <Posts />
  </>
);

export default Home;
