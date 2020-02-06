import React, { Component } from 'react';
import Scoreboard from '~/components/dashboard/scoreboard/index';
import '~/.semantic/dist/semantic.rtl.min.css';
import Layout from '~/components/global/layout';
import withAuth from '~/components/global/withAuth';
import { scoreboardAPI, getTeamNameAPI, teamCountAPI } from '~/redux/api/dashboard';
import NotFound from '~/components/global/notFound';
import _ from 'lodash';

class MainScoreboard extends Component {
  static async getInitialProps({ query }, token) {
    const contestID = 2;
    let milestoneID = query.milestone; 
    let startIndex = 1;

    const res0 = await teamCountAPI(milestoneID, token);
    const { teams_count } = res0.data;


    let endIndex = teams_count;
    let myteam = {
      name: '',
      myPageTopRank: 1,
      teams_count: teams_count,
    };

    const res = await scoreboardAPI(startIndex, endIndex, milestoneID, token);
    let { milestone, scoreboard, tasks, status_code } = res.data;
    if (status_code === 200 || _.isUndefined(status_code)) {
      status_code = 200;

      const res2 = await getTeamNameAPI(token);
      const teams = res2.data.teams;
      //const teamName = "asgharha"
      
      const teamName = teams[contestID];

      const myRow = scoreboard.filter((a) => {
        return a.name === teamName;
      })[0];
      if (!_.isUndefined(myRow)) {
        const myPageTopRank = Math.floor((myRow.rank - 1) / 20) * 20 + 1;
        myteam = {
          name: teamName,
          myPageTopRank: myPageTopRank,
          teams_count: teams_count,
        };
      }
    }
    return { milestone, scoreboard, tasks, status_code, token, myteam };
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
