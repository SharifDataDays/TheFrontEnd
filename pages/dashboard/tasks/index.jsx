import Head from 'next/head';
import React, { Component } from 'react';
import withAuth from '~/components/global/withAuth';
import Layout from '~/components/global/layout';
import Tasks from '~/components/dashboard/tasks';
import { taskListAPI } from '~/redux/api/dashboard';

class TaskPage extends Component {
  static async getInitialProps(ctx, token) {
    const res = await taskListAPI(token);
    const { documents } = res.data;
    return { tasks: documents, token };
  }

  render() {
    const { tasks, token } = this.props;
    return (
      <>
        <Head>
          <title>DataDays 2020</title>
        </Head>
        <Layout token={token} hasNavbar>
          <Tasks tasks={tasks} />
        </Layout>
      </>
    );
  }
}

export default withAuth(true)(TaskPage);
