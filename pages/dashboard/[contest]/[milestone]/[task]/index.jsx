import Head from 'next/head';
import React, { Component } from 'react';
import withAuth from '~/components/global/withAuth';
import Layout from '~/components/global/layout';
import Resources from '~/components/dashboard/resources';
import NotFound from '~/components/dashboard/resources/notFound';
import { taskAPI } from '~/redux/api/dashboard';

class ResourcesPage extends Component {
  static async getInitialProps({ query }, token) {
    const res = await taskAPI(query.task, token);
    const task = res.data;
    return {
      task,
      token,
      contestId: query.contest,
      milestoneId: query.milestone,
      taskId: query.task,
    };
  }

  render() {
    const { task, token, contestId, milestoneId, taskId } = this.props;
    return (
      <>
        <Head>
          <title>DataDays 2020</title>
        </Head>
        <Layout token={token} hasNavbar hasFooter>
          {task.status_code !== 200 ? (
            <NotFound />
          ) : (
            <Resources
              content={task}
              contestId={contestId}
              milestoneId={milestoneId}
              taskId={taskId}
            />
          )}
        </Layout>
      </>
    );
  }
}

export default withAuth(true)(ResourcesPage);
