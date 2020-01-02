import _ from 'lodash';
import React from 'react';
import Head from 'next/head';
import Navbar from '~/components/global/navbar';
import Footer from '~/components/global/footer';
import Post from '~/components/blog/post';

const PostPage = () => {
  const { auth, post } = this.props;
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
      />
      <Footer />
    </>
  );
};

export default PostPage;
