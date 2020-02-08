import _ from 'lodash';
import React, { Component } from 'react';
import withAuth from '~/components/global/withAuth';
import Layout from '~/components/global/layout';
import Milestones from '~/components/dashboard/milestones';
import { contestAPI, allContestsAPI, milestoneAPI } from '~/redux/api/dashboard';
import Forbidden from '~/components/global/Forbidden';

class Dashboard extends Component {
  static async getInitialProps(ctx, token) {
    let status_code = 200;
    const allRes = await allContestsAPI(token);
    const { contests } = allRes.data;
    if (!_.isUndefined(contests.status_code)) {
      status_code = contests.status_code;
    }
    if (status_code != 200) {
      return { token,status_code };
    }

    const contest = contests[0];

    const contestRes = await contestAPI(contest.id, token);
    if (!_.isUndefined(contestRes.data.status_code)) {
      status_code = contestRes.data.status_code;
    }
    if (status_code != 200) {
      return { token,status_code };
    }
    const milestones = await Promise.all(
      _.map(contestRes.data.contest.milestones, async (id) => {
        const milestoneRes = await milestoneAPI(allRes.data.contests[0].id, id, token);

        const { milestone } = milestoneRes.data;

        return milestone;
      }),
    );
    return { milestones, contest, token, status_code };
  }

  render() {
    const { milestones, contest, token, status_code } = this.props;
    console.log(token)
    return (
      <Layout token={token} hasNavbar hasFooter>
        {status_code === 403 ? (
          <Forbidden cid={2} />
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
