import Head from 'next/head';
import React, { Component } from 'react';
import withAuth from '~/components/global/withAuth';
import Layout from '~/components/global/layout';
import Tasks from '~/components/dashboard/tasks';
import { milestoneAPI } from '~/redux/api/dashboard';
import NotFound from '~/components/global/notFound';

import _ from 'lodash';

class TaskPage extends Component {
  static async getInitialProps({ query }, token) {
    const { contest, milestone } = query;
    const res = await milestoneAPI(contest, milestone, token);
    let status_code = 200;
    if (!_.isUndefined(res.data.status_code)) {
      status_code = res.data.status_code;
    }
    // console.log(res.data.milestone.tasks)
    return { milestone: res.data.milestone, cid: contest, mid: milestone, token, status_code };
  }

  render() {
    const { milestone, cid, mid, token, status_code } = this.props;
    return (
      <>
        <Head>
          <title>DataDays 2020</title>
        </Head>

        <Layout token={token} hasNavbar hasFooter>
          {status_code !== 200 ? <NotFound /> : <Tasks cid={cid} mid={mid} milestone={milestone} />}
        </Layout>
      </>
    );
  }
}

export default withAuth(true)(TaskPage);
