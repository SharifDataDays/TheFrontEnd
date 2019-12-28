import fetch from 'isomorphic-unfetch';
import React, { Component } from 'react';
import nextCookie from 'next-cookies';
import Head from 'next/head';
import Layout from '~/components/dashboard/layout';
import withNotLogged from '~/components/global/auth/withNotLogged';
import Resources from '~/components/dashboard/resources';
import { taskAPI } from '~/redux/api/dashboard';

class ResourcesPage extends Component {
  static async getInitialProps(ctx) {
    const { token } = nextCookie(ctx);
    const res = await fetch(taskAPI(ctx.query.id), {
      headers: {
        Authorization: `Bearer ${token ? token.access : token}`,
      },
    });
    const content = await res.json();
    return { content };
  }

  render() {
    const { content } = this.props;
    return (
      <>
        <Head>
          <title>DataDays 2020</title>
        </Head>
        <Layout>
          <Resources content={content} />
        </Layout>
      </>
    );
  }
}

export default withNotLogged(ResourcesPage);