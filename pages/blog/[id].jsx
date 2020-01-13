import _ from 'lodash';
import React, { Component } from 'react';
import Head from 'next/head';
import withAuth from '~/components/global/withAuth';
import Layout from '~/components/global/layout';
import Post from '~/components/blog/post';
import { blogPostAPI } from '~/redux/api/blog';
import { profileAPI } from '~/redux/api/dashboard';
import Comments from '~/components/blog/post/comments';
import samples from '~/public/static/comments-test.json';

class PostPage extends Component {
  static async getInitialProps ({ query }, token) {
    const { id } = query;
    const res = await blogPostAPI(id);
    const resProfile = await profileAPI(token);
    const post = res.data;
    const profileData = resProfile.data;
    return { post, token, profileData };
  }

  render () {
    const { post, token, profileData } = this.props;
    const { profile } = profileData;
    const { firstname_fa, lastname_fa } =
      profile !== undefined ? profile : { firstname_fa: '', lastname_fa: '' };
    const { image, date, title_fa, text_fa, comments } = post;
    const isLoggedIn = token !== '';
    const name = firstname_fa.concat(' ').concat(lastname_fa);
    const profProps = { isLoggedIn, name };
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
