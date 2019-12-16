import React from 'react';
import Head from 'next/head';
import Navbar from '~/components/global/navbar';
import Posts from '~/components/blog/posts';
import HeaderImage from '~/components/blog/headerImage';

function Blog() {
  return (
    <>
      <Head>
        <title>بلاگ DataDays</title>
      </Head>
      <Navbar />
      <HeaderImage />
      <Posts />
    </>
  );
}

export default Blog;
