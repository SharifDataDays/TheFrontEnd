import _ from 'lodash';
import Head from 'next/head';
import React, { Component } from 'react';
import withAuth from '~/components/global/withAuth';
import Layout from '~/components/dashboard/layout';
import Resources from '~/components/dashboard/resources';
import NotFound from '~/components/dashboard/resources/notFound';
import { taskAPI } from '~/redux/api/dashboard';

class ResourcesPage extends Component {
  static async getInitialProps({ query }, token) {
    const res = await taskAPI(query.id, token);
    const task = res.data;
    return { task };
  }

  render() {
    const { task } = this.props;
    return (
      <>
        <Head>
          <title>DataDays 2020</title>
        </Head>
        <Layout>{task.status_code !== 200 ? <NotFound /> : <Resources content={task} />}</Layout>
      </>
    );
  }
}

export default withAuth(true)(ResourcesPage);
