import React, { Component } from 'react';
import Navbar from '~/components/dashboard/navbar';
// import Milestones from 'components/dashboard/main/milestones.jsx'
import TimeLine from '~/components/dashboard/main/milestones.jsx';
import Timeline from '../../components/dashboard/main/milestones';
import { contestMilestoneListAPI, milestoneTaskListAPI } from '~/redux/api/dashboard';
import { getToken } from '~/components/dashboard/main/api';
import nextCookie from 'next-cookies';

export default class dashboard extends Component {
  static async getInitialProps(ctx) {
    let { token } = nextCookie(ctx);
    token = await getToken(token);
    const res = await fetch(contestMilestoneListAPI(1), {
      headers: {
        Authorization: `Bearer ${token ? token.access : token}`,
      },
    });
    let contest = await res.json();
    contest = contest.contest;

    let milestones = [];
    for (let id = 0; id < contest.milestones.length; id++) {
      const res = await fetch(milestoneTaskListAPI(1, contest.milestones[id]), {
        headers: {
          Authorization: `Bearer ${token ? token.access : token}`,
        },
      });
      let milestone = await res.json();
      milestone = milestone.milestone;
      milestones.push(milestone);
    }
    return { contest, milestones };
  }

  render() {
    const { milestones, contest } = this.props;
    return (
      <>
        <Navbar />
        <Timeline contest={contest} milestones={milestones} />
      </>
    );
  }
}
