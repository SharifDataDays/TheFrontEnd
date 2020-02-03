import React, { Component } from 'react';
import Scoreboard from '~/components/dashboard/scoreboard/index';
import '~/.semantic/dist/semantic.rtl.min.css';
import Layout from '~/components/global/layout';
import withAuth from '~/components/global/withAuth';
import { scoreboardAPI, profileUpdateAPI } from '~/redux/api/dashboard';
import NotFound from '~/components/global/notFound';
import _ from 'lodash';

class MainScoreboard extends Component {
  static async getInitialProps({ query }, token) {
    let milestoneID = query.milestone; //100 bezanid kar kone: scoreboard/100/
    let startIndex = 1;
    let endIndex = 50; //todo numberOfTeams


    const res = await scoreboardAPI(startIndex, endIndex, milestoneID, token);
    let { milestone, scoreboard, tasks, status_code } = res.data;
    if (_.isUndefined(status_code)) {
      status_code = 200;
    }

    //todo get teamname
    const teamName = "parsaalian0"

    const myRow = scoreboard.filter((a)=>{return a.name ===teamName})[0]
    const myPageTopRank = Math.floor((myRow.rank - 1) / 20) * 20 + 1

    const myteam={
      name: teamName,
      myPageTopRank: myPageTopRank
    }
    return { milestone, scoreboard, tasks, status_code, token , myteam};
  }

  render() {
    const { milestone, scoreboard, tasks, token, status_code, myteam } = this.props;
    return (
      <Layout token={token} hasNavbar hasFooter>
        {status_code !== 200 ? (
          <NotFound />
        ) : (
          <Scoreboard milestone={milestone} teams={scoreboard} tasks={tasks} myteam={myteam} />
        )}
      </Layout>
    );
  }
}
export default withAuth(true)(MainScoreboard);
