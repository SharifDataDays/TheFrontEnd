import Head from 'next/head';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import withAuth from '~/components/global/withAuth';
import Layout from '~/components/dashboard/layout';
import Tasks from '~/components/dashboard/tasks';
import { loadTaskListAction } from '~/redux/actions/tasks';

class TaskPage extends Component {
  static async getInitialProps(ctx, token) {
    console.log(token);
    return { token };
  }

  render() {
    const { tasks } = this.props;
    return (
      <>
        <Head>
          <title>DataDays 2020</title>
        </Head>
        <Layout>{/* <Tasks tasks={tasks.list} /> */}</Layout>
      </>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { tasks } = state;
  return {
    tasks,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    load: () => dispatch(loadTaskListAction()),
  };
}

export default withAuth(true)(connect(mapStateToProps, mapDispatchToProps)(TaskPage));
