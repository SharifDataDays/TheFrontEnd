import Head from 'next/head';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import withAuth from '~/components/global/withAuth';
import Layout from '~/components/dashboard/layout';
import Resources from '~/components/dashboard/resources';
import { loadTaskAction } from '~/redux/actions/tasks';

class ResourcesPage extends Component {
  static async getInitialProps(ctx) {
    return { id: ctx.query.id };
  }

  componentDidMount() {
    const { load, id } = this.props;
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
  const { tasks } = state;
  return {
    tasks,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    load: (id) => dispatch(loadTaskAction(id)),
  };
}

export default withAuth(true)(connect(mapStateToProps, mapDispatchToProps)(ResourcesPage));
