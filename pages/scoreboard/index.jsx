import React, { Component } from 'react';
import Scoreboard from '~/components/dashboard/scoreboard/index';
import '~/.semantic/dist/semantic.rtl.min.css';
import Layout from '~/components/global/layout';
import withAuth from '~/components/global/withAuth';
import { scoreboardAPI } from '~/redux/api/dashboard';

class MainScoreboard extends Component {
  static async getInitialProps(ctx, token) {
    console.log('herererererererererere');
    let milestoneID = 100;
    let startIndex = 1;
    let endIndex = 50;
    const res = await scoreboardAPI(startIndex, endIndex, milestoneID, token);

    console.log('^^^^^^^^^^^^^^^ res.data');
    console.log(res.data);

    const { milestone } = res.data;
    const { scoreboard } = res.data;
    const { tasks } = res.data;

    return { milestone, scoreboard, tasks };
  }

  render() {
    const { milestone, scoreboard, tasks } = this.props;
    return (
      <Layout>
        <Scoreboard milestone={milestone} teams={scoreboard} tasks={tasks}/>
      </Layout>
    );
  }
}
export default withAuth(true)(MainScoreboard);

// const ScoreboardTest = (props) => (
// <Layout>
//   <Scoreboard />
// </Layout>
// );
// export default ScoreboardTest;
