import React from 'react';
import Head from 'next/head';
import Navbar from '~/components/global/navbar';
import HeaderImage from '~/components/blog/headerImage';
import Posts from '~/components/blog/posts';

const Home = () => (
  <>
    <Head>
      <title>بلاگ DataDays</title>
    </Head>
    <Navbar />
    <HeaderImage />
    <Posts />
  </>
);

export default Home;
