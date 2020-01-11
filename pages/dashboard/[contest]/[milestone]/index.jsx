import Head from 'next/head';
import React, { Component } from 'react';
import withAuth from '~/components/global/withAuth';
import Layout from '~/components/global/layout';
import Tasks from '~/components/dashboard/tasks';
import { milestoneAPI } from '~/redux/api/dashboard';

class TaskPage extends Component {
  static async getInitialProps({ query }, token) {
    const { contest, milestone } = query;
    const res = await milestoneAPI(contest, milestone, token);
    return { milestone: res.data.milestone, token };
  }

  render() {
    const { milestone, token } = this.props;
    return (
      <>
        <Head>
          <title>DataDays 2020</title>
        </Head>
        <Layout token={token} hasNavbar>
          <Tasks milestone={milestone} />
        </Layout>
      </>
    );
  }
}

export default withAuth(true)(TaskPage);
