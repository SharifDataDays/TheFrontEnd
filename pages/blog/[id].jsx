import _ from 'lodash';
import React from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import Navbar from '~/components/global/navbar';
import Footer from '~/components/global/footer';
import Post from '~/components/blog/post';
import { postAPI } from '~/redux/api/blog';

function PostPage({ post }) {
  const { image, date, title_fa, text_fa, comments } = post;
  return (
    <>
      <Head>
        <title>{`بلاگ DataDays | ${title_fa}`}</title>
      </Head>
      <Navbar />
      <Post
        image={image}
        header={{
          title: title_fa,
          desc: '',
          date,
        }}
        content={_.replace(text_fa, '\r', '')}
        comments={comments.length}
      />
      <Footer />
    </>
  );
}

PostPage.getInitialProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(postAPI(id));
  const post = await res.json();
  return { post };
};

export default PostPage;
