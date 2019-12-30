import Head from 'next/head';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '~/components/dashboard/layout';
import Resources from '~/components/dashboard/resources';
import { loadTaskAction } from '~/redux/actions/tasks';
import { authorizeAction } from '~/redux/actions/auth';

class ResourcesPage extends Component {
  static async getInitialProps(ctx) {
    return { id: ctx.query.id };
  }

  componentDidMount() {
    const { authorize, load, id } = this.props;
    authorize();
    load(id);
  }

  render() {
    const { tasks } = this.props;
    return (
      <>
        <Head>
          <title>DataDays 2020</title>
        </Head>
        <Layout>
          <Resources content={tasks.current} />
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
    load: (id) => dispatch(loadTaskAction(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResourcesPage);
