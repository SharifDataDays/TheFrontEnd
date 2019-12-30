import Head from 'next/head';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '~/components/dashboard/layout';
import Tasks from '~/components/dashboard/tasks';
import { loadTaskListAction } from '~/redux/actions/tasks';
import { authorizeAction } from '~/redux/actions/auth';

class TaskPage extends Component {
  componentDidMount() {
    const { authorize, load } = this.props;
    authorize();
    load();
  }

  render() {
    const { tasks } = this.props;
    return (
      <>
        <Head>
          <title>DataDays 2020</title>
        </Head>
        <Layout>
          <Tasks tasks={tasks.list} />
        </Layout>
      </>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { auth, tasks } = state;
  return {
    auth,
    tasks,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    authorize: () => dispatch(authorizeAction()),
    load: () => dispatch(loadTaskListAction()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskPage);
