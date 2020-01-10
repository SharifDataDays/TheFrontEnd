import React, { Component } from 'react';
import Timeline from '../../components/dashboard/main/milestones';
import { contestAPI, milestoneAPI } from '~/redux/api/dashboard';
import withAuth from '~/components/global/withAuth';
import Layout from '~/components/global/layout';

class Dashboard extends Component {
  static async getInitialProps(ctx, token) {
    const contestNumber = 3;
    console.log(token);
    const res = await contestAPI(contestNumber, token);
    const { contest } = res.data;
    console.log(res);
    console.log(contest);
    let milestones = [];
    for (let id = 0; id < contest.milestones.length; id++) {
      const res = await milestoneAPI(contestNumber, contest.milestones[id], token);
      const { milestone } = res.data;
      console.log(milestone);
      milestones.push(milestone);
    }
    console.log(milestones)
    return { contest, milestones, token };
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
