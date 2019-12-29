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
    const milestones = await res.json();
    return milestones;
  }

  render() {
    const { milestones } = this.props;
    return (
      <>
        <Navbar />
        <Timeline milestones={milestones} />
      </>
    );
  }
}
