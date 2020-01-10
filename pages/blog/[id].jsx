import _ from 'lodash';
import React, { Component } from 'react';
import Head from 'next/head';
import withAuth from '~/components/global/withAuth';
import Layout from '~/components/global/layout';
import Post from '~/components/blog/post';
import { blogPostAPI } from '~/redux/api/blog';
import { getProfileApi } from '~/redux/api/dashboard';
import Comments from '~/components/blog/post/comments';
import samples from '~/public/static/comments-test.json';

class PostPage extends Component {
  static async getInitialProps ({ query }, token) {
    const { id } = query;
    const res = await blogPostAPI(id);
    const resProfile = await getProfileApi(token);
    const post = res.data;
    const profileAPI = resProfile.data;
    return { post, token, profileAPI };
  }

  render () {
    const { post, token } = this.props;
    const { image, date, title_fa, text_fa, comments } = post;
    const isLoggedIn = token !== '';
    const profProps = { isLoggedIn };
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
          <Comments comments={samples} {...profProps} />
        </Layout>
      </>
    );
  }
}

export default withAuth()(PostPage);
