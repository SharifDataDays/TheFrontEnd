import React, { Component } from 'react';
import Head from 'next/head';
import withAuth from '~/components/global/withAuth';
import Layout from '~/components/global/layout';
import Posts from '~/components/blog/posts';
import HeaderImage from '~/components/blog/headerImage';
import { blogHomeAPI } from '~/redux/api/blog';

class Blog extends Component {
  static async getInitialProps(ctx, token) {
    const res = await blogHomeAPI();
    const posts = res.data;
    return { posts, token };
  }

  render() {
    const { posts, token } = this.props;
    return (
      <>
        <Head>
          <title>بلاگ DataDays</title>
        </Head>
        <Layout token={token} hasNavbar hasFooter>
          <HeaderImage />
          <Posts posts={posts} />
        </Layout>
      </>
    );
  }
}

export default withAuth()(Blog);
