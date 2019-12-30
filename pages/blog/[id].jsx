import _ from 'lodash';
import React, { Component } from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import withAuth from '~/components/global/withAuth';
import Navbar from '~/components/global/navbar';
import AuthNavbar from '~/components/global/navbar/auth';
import Footer from '~/components/global/footer';
import Post from '~/components/blog/post';
import { postAPI } from '~/redux/api/blog';

class PostPage extends Component {
  static async getInitialProps(context) {
    const { id } = context.query;
    const res = await fetch(postAPI(id));
    const post = await res.json();
    return { post };
  }

  render() {
    const { auth, post } = this.props;
    const { image, date, title_fa, text_fa, comments } = post;
    return (
      <>
        <Head>
          <title>{`بلاگ DataDays | ${title_fa}`}</title>
        </Head>
        {_.isEmpty(auth.token) ? <Navbar /> : <AuthNavbar />}
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
  }
}

export default withAuth()(PostPage);
