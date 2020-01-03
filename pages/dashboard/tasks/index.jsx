import Head from 'next/head';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import withAuth from '~/components/global/withAuth';
import Layout from '~/components/dashboard/layout';
import Tasks from '~/components/dashboard/tasks';
import { taskListAPI } from '~/redux/api/dashboard';

class TaskPage extends Component {
  static async getInitialProps(ctx, token) {
    const res = await taskListAPI(token);
    const { documents } = res.data;
    return { tasks: documents };
  }

  render() {
    const { tasks } = this.props;
    return (
      <>
        <Head>
          <title>DataDays 2020</title>
        </Head>
        <Layout>
          <Tasks tasks={tasks} />
        </Layout>
      </>
    );
  }
}

export default withAuth(true)(TaskPage);
