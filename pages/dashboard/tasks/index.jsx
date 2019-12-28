import fetch from 'isomorphic-unfetch';
import React, { Component } from 'react';
import nextCookie from 'next-cookies';
import Head from 'next/head';
import Layout from '~/components/dashboard/layout';
import withNotLogged from '~/components/global/auth/withNotLogged';
import Tasks from '~/components/dashboard/tasks';
import { taskListAPI } from '~/redux/api/dashboard';

class TaskPage extends Component {
  static async getInitialProps(ctx) {
    const { token } = nextCookie(ctx);
    const res = await fetch(taskListAPI(), {
      headers: {
        Authorization: `Bearer ${token ? token.access : token}`,
      },
    });
    const tasks = await res.json();
    return { tasks };
  }

  render() {
    const { tasks } = this.props;
    const { documents } = tasks;
    return (
      <>
        <Head>
          <title>DataDays 2020</title>
        </Head>
        <Layout>
          <Tasks tasks={documents} />
        </Layout>
      </>
    );
  }
}

export default withNotLogged(TaskPage);
