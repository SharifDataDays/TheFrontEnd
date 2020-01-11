import _ from 'lodash';
import React, { Component } from 'react';
import withAuth from '~/components/global/withAuth';
import Layout from '~/components/global/layout';
import Timeline from '~/components/dashboard/milestones';
import { contestAPI, allContestsAPI, milestoneAPI } from '~/redux/api/dashboard';

class Dashboard extends Component {
  static async getInitialProps(ctx, token) {
    const allRes = await allContestsAPI(token);
    const contest = allRes.data.contests[0];
    const contestRes = await contestAPI(contest.id, token);
    const milestones = await Promise.all(
      _.map(contestRes.data.contest.milestones, async (id) => {
        const milestoneRes = await milestoneAPI(allRes.data.contests[0].id, id, token);
        const { milestone } = milestoneRes.data;
        return milestone;
      }),
    );
    return { milestones, contest, token };
  }

  render() {
    const { milestones, contest, token } = this.props;
    return (
      <Layout token={token} hasNavbar hasFooter>
        <Timeline contest={contest} milestones={milestones} />
      </Layout>
    );
  }
}

export default withAuth(true)(Dashboard);
