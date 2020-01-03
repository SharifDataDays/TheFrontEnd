import _ from 'lodash';
import React, { Component } from 'react';
import Head from 'next/head';
import withAuth from '~/components/global/withAuth';
import Layout from '~/components/global/layout';
import Post from '~/components/blog/post';
import { blogPostAPI } from '~/redux/api/blog';

class PostPage extends Component {
  static async getInitialProps({ query }, token) {
    const { id } = query;
    const res = await blogPostAPI(id);
    const post = res.data;
    return { post, token };
  }

  render() {
    const { post, token } = this.props;
    const { image, date, title_fa, text_fa, comments } = post;
    return (
      <>
        <Head>
          <title>{`بلاگ DataDays | ${title_fa}`}</title>
        </Head>
        <Layout token={token} hasNavbar hasFooter>
          <Post
            image={image}
            header={{
              title: title_fa,
              desc: '',
              date,
            }}
            content={_.replace(text_fa, '\r', '')}
          />
        </Layout>
      </>
    );
  }
}

export default withAuth()(PostPage);
