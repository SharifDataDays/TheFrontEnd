import React from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import { blogHomeAPI } from '~/redux/api/blog';
import Navbar from '~/components/global/navbar';
import Footer from '~/components/global/footer';
import Posts from '~/components/blog/posts';
import HeaderImage from '~/components/blog/headerImage';

function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>بلاگ DataDays</title>
      </Head>
      <Navbar />
      <HeaderImage />
      <Posts posts={posts} />
      <Footer />
    </>
  );
}

Blog.getInitialProps = async (context) => {
  const res = await fetch(blogHomeAPI());
  const posts = await res.json();
  return { posts };
};

export default Blog;
