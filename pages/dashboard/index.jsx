import React, { Component } from 'react';
import Timeline from '../../components/dashboard/main/milestones';
import { contestAPI, milestoneAPI } from '~/redux/api/dashboard';
import withAuth from '~/components/global/withAuth';

class Dashboard extends Component {
  static async getInitialProps(ctx, token) {
    console.log(token)
    const res = await contestAPI(1, token);
    const { contest } = res.data;
    console.log(res)
    console.log(contest)
    let milestones = [];
    for (let id = 0; id < contest.milestones.length; id++) {
      const res = await milestoneAPI(1, contest.milestones[id], token);
      const { milestone } = res.data;
      milestones.push(milestone);
    }
    return { contest, milestones };
  }

  render() {
    const { milestones, contest } = this.props;
    return (
      <>
        <Timeline contest={contest} milestones={milestones} />
      </>
    );
  }
}

export default withAuth(true)(Dashboard);
