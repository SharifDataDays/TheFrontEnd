import _ from 'lodash';
import React, { Component } from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import { blogHomeAPI } from '~/redux/api/blog';
import withAuth from '~/components/global/withAuth';
import Navbar from '~/components/global/navbar';
import AuthNavbar from '~/components/global/navbar/auth';
import Footer from '~/components/global/footer';
import Posts from '~/components/blog/posts';
import HeaderImage from '~/components/blog/headerImage';

class Blog extends Component {
  static async getInitialProps(ctx) {
    const res = await fetch(blogHomeAPI());
    const posts = await res.json();
    return { posts };
  }

  render() {
    const { auth, posts } = this.props;
    return (
      <>
        <Head>
          <title>بلاگ DataDays</title>
        </Head>
        {_.isEmpty(auth.token) ? <Navbar /> : <AuthNavbar />}
        <HeaderImage />
        <Posts posts={posts} />
        <Footer />
      </>
    );
  }
}

export default withAuth()(Blog);
