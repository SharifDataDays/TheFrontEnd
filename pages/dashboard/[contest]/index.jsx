import _ from 'lodash';
import React, { Component } from 'react';
import withAuth from '~/components/global/withAuth';
import Layout from '~/components/global/layout';
import Milestones from '~/components/dashboard/milestones';
import { contestAPI, allContestsAPI, milestoneAPI } from '~/redux/api/dashboard';
import Forbidden from '~/components/global/forbidden';
import NotFound from '~/components/global/notFound';
import Router from 'next/router';

class Dashboard extends Component {
  static async getInitialProps({ query }, token) {
    let status_code = 200;
    const contest_id = query.contest;

    const contestRes = await contestAPI(contest_id, token);
    if (!_.isUndefined(contestRes.data.status_code)) {
      status_code = contestRes.data.status_code;
    }
    const contest = contestRes.data.contest;

    // console.log(contestRes);
    // console.log(contest);
    // console.log(contest_id);

    if (status_code != 200) {
      const detail = contestRes.data.detail;
      return { token, status_code, detail, contest_id };
    }

    const milestones = await Promise.all(
      _.map(contestRes.data.contest.milestones, async (id) => {
        const milestoneRes = await milestoneAPI(contest_id, id, token);
        const { milestone } = milestoneRes.data;
        return milestone;
      }),
    );
    //console.log(milestones);

    return { milestones, contest, token, status_code, contest_id };
  }

  render() {
    const { milestones, contest, token, status_code, contest_id, detail } = this.props;

    if (status_code === 200 && milestones.length === 1) {
      const milestone = milestones[0];
      if (milestone.tasks.length === 1) {
        Router.push(
          `/dashboard/${contest_id}/${milestone.id}/${milestone.tasks[0].id}`,
          `/dashboard/${contest_id}/${milestone.id}/${milestone.tasks[0].id}`,
          { shallow: false },
        );
        return <></>;
      }
      Router.push(
        `/dashboard/${contest_id}/${milestone.id}`,
        `/dashboard/${contest_id}/${milestone.id}`,
        { shallow: false },
      );
      return <></>;
    }
    return (
      <Layout token={token} hasNavbar hasFooter>
        {status_code === 403 ? (
          <Forbidden cid={contest_id} detail={detail} />
        ) : status_code !== 200 ? (
          <NotFound />
        ) : (
          <Milestones contest={contest} milestones={milestones} />
        )}
      </Layout>
    );
  }
}

export default withAuth(true)(Dashboard);
