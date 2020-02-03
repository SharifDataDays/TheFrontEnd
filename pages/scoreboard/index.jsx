import React, { Component } from 'react';
import Scoreboard from '~/components/dashboard/scoreboard/index';
import '~/.semantic/dist/semantic.rtl.min.css';
import Layout from '~/components/global/layout';
import withAuth from '~/components/global/withAuth';
import { scoreboardAPI } from '~/redux/api/dashboard';

class MainScoreboard extends Component {
  static async getInitialProps(ctx, token) {
    let milestoneID = 100;
    let startIndex = 1;
    let endIndex = 50;
    const res = await scoreboardAPI(startIndex, endIndex, milestoneID, token);

    const { milestone } = res.data;
    const { scoreboard } = res.data;
    const { tasks } = res.data;

    return { milestone, scoreboard, tasks, token };
  }

  render() {
    const { milestone, scoreboard, tasks, token } = this.props;
    return (
      <Layout token={token} hasNavbar hasFooter>
        <Scoreboard milestone={milestone} teams={scoreboard} tasks={tasks} />
      </Layout>
    );
  }
}
export default withAuth(true)(MainScoreboard);
