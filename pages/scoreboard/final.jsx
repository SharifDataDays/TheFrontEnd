import React, { Component } from 'react';
import Scoreboard from '~/components/dashboard/scoreboard';
import '~/.semantic/dist/semantic.rtl.min.css';
import Layout from '~/components/global/layout';
import withAuth from '~/components/global/withAuth';
import { scoreboardAPI, getTeamNameAPI, teamCountAPI } from '~/redux/api/dashboard';
import NotFound from '~/components/global/notFound';
import _ from 'lodash';

const finalData = {
  milestone: {
    id: 3006,
    name: 'چالش نهایی',
  },
  scoreboard: [
    {
      name: 'ostrichious',
      rank: 1,
      scores: ['5985.77643485128', '5989.47962'],
      total_score: '5989.47962',
    },

    {
      name: 'Pandas',
      rank: 2,
      scores: ['5980.77882359917', '5988.138571'],
      total_score: '5988.138571',
    },

    {
      name: 'KDD',
      rank: 3,
      scores: ['5972.54223328956', '5972.697979'],
      total_score: '5972.697979',
    },
    {
      name: 'تانژانت هایپربولیک مزایای بسیاری دارد',
      rank: 4,
      scores: ['5953.308626', '5955.35148'],
      total_score: '5955.35148',
    },

    {
      name: 'Clever Hans',
      rank: 5,
      scores: ['5949.388057', '5952.370885'],
      total_score: '5952.370885',
    },

    {
      name: 'mrsam_3',
      rank: 6,
      scores: ['5919.004458', '5935.308888'],
      total_score: '5935.308888',
    },

    {
      name: 'Amin1091_3',
      rank: 7,
      scores: ['5899.47006', '5909.766755'],
      total_score: '5909.766755',
    },

    {
      name: 'FSociety',
      rank: 8,
      scores: ['5898.883075', '5899.148284'],
      total_score: '5899.148284',
    },

    {
      name: 'reinforcement',
      rank: 9,
      scores: ['5871.425503', '5886.212523'],
      total_score: '5886.212523',
    },

    {
      name: 'ابنرمال دیستیریبیوشن',
      rank: 10,
      scores: ['5878.964301', '5885.333233'],
      total_score: '5885.333233',
    },

    {
      name: 'overfit',
      rank: 11,
      scores: ['5871.977035', '5880.438033'],
      total_score: '5880.438033',
    },

    {
      name: 'Codein',
      rank: 12,
      scores: ['5853.976805', '5857.2288'],
      total_score: '5857.2288',
    },

    {
      name: 'EzPz',
      rank: 13,
      scores: ['5753.576697', '5764.879137'],
      total_score: '5764.879137',
    },

    {
      name: 'alirezapa_3',
      rank: 14,
      scores: ['5748.557164', '5763.922136'],
      total_score: '5763.922136',
    },

    {
      name: 'CoronaVirus',
      rank: 15,
      scores: ['5738.313763', '5741.167754'],
      total_score: '5741.167754',
    },

    {
      name: 'idiots',
      rank: 16,
      scores: ['5809.104625', '5684.179461'],
      total_score: '5684.179461',
    },

    {
      name: 'Critics',
      rank: 17,
      scores: ['5662.773355', '5620.91132'],
      total_score: '5620.91132',
    },

    {
      name: 'DM2',
      rank: 18,
      scores: ['5263.122297', '5261.956245'],
      total_score: '5261.956245',
    },
    {
      name: 'need a name',
      rank: 19,
      scores: ['5250.259762', '5163.442794'],
      total_score: '5163.442794',
    },
    {
      name: 'nullz *',
      rank: 20,
      scores: ['5990.73', '5992.477012'],
      total_score: '5992.477012',
    },
    {
      name: 'maede.nsi_3 **',
      rank: 21,
      scores: ['5666.32', '5670.92'],
      total_score: '5670.92',
    },

    {
      name: 'sikimkhiyari **',
      rank: 22,
      scores: ['5960.36', '5662.15'],
      total_score: '5662.15',
    },

    {
      name: 'کمبزه **',
      rank: 23,
      scores: ['5565.12', '5575.27'],
      total_score: '5575.27',
    },

    {
      name: '!Har Chi Bezarin Okeye **',
      rank: 24,
      scores: ['5766.56', '5511.13'],
      total_score: '5511.13',
    },

    {
      name: 'Socialised Potato **',
      rank: 25,
      scores: ['5480.78', '5480.37'],
      total_score: '5480.37',
    },

    {
      name: 'MRSH **',
      rank: 26,
      scores: ['5479.81', '5460.63'],
      total_score: '5460.63',
    },

    {
      name: 'آذرخش. **',
      rank: 27,
      scores: ['5211.83', '5218.34'],
      total_score: '5218.34',
    },

    {
      name: 'گلابیز **',
      rank: 28,
      scores: ['5960.36', '5216.35'],
      total_score: '5216.35',
    },

    {
      name: 'Kafa_3 *',
      rank: 29,
      scores: ['5185.77', '5214.40'],
      total_score: '5214.40',
    },

    {
      name: 'Machina **',
      rank: 30,
      scores: ['5220.30', '5207.54'],
      total_score: '5207.54',
    },

    {
      name: 'Flawless **',
      rank: 31,
      scores: ['5385.23', '5138.26'],
      total_score: '5138.26',
    },

    {
      name: 'ELECAV **',
      rank: 32,
      scores: ['5214.02', '5045.34'],
      total_score: '5045.34',
    },
  ],
  tasks: [
    {
      id: 1,
      name: 'چالش نهایی',
    },
    {
      id: 2,
      name: 'چالش نهایی - بازداوری ',
    },
  ],
};

const details =
  'عدم شرکت داده‌شدن در رده‌بندی نهایی به علت نقص گزارش *\n\
   عدم شرکت داده‌شدن در رده‌بندی نهایی به علت عدم ارسال گزارش **';

class MainScoreboard extends Component {
  static async getInitialProps({ query }, token) {
    const contestID = 3;

    let milestoneID = 6;
    let requestID = contestID;
    if (milestoneID !== 0) requestID = contestID * 1000 + milestoneID;

    let startIndex = 1;
    // console.log(query);
    // console.log(requestID);
    // const res0 = await teamCountAPI(requestID, token);
    const { teams_count } = 21;
    // console.log(res0.data);
    let endIndex = teams_count;
    let myteam = {
      name: '',
      myPageTopRank: 1,
      teams_count: teams_count,
      myRank: 0,
    };

    let { milestone, scoreboard, tasks } = finalData;

    // const res2 = await getTeamNameAPI(token);
    // const teams = res2.data.teams;
    // //const teamName = "asgharha"

    // let teamName = '';
    // if (!_.isUndefined(teams)) teamName = teams[contestID];

    // const myRow = scoreboard.filter((a) => {
    //   return a.name === teamName;
    // })[0];
    // if (!_.isUndefined(myRow)) {
    //   const myPageTopRank = Math.floor((myRow.rank - 1) / 15) * 15 + 1;
    //   myteam = {
    //     name: teamName,
    //     myPageTopRank: myPageTopRank,
    //     teams_count: teams_count,
    //     myRank: myRow.rank,
    //   };
    // }

    return { milestone, scoreboard, tasks, token, myteam };
  }

  render() {
    const { milestone, scoreboard, tasks, token, myteam } = this.props;
    return (
      <Layout token={token} hasNavbar hasFooter transparent>
        <Scoreboard
          milestone={milestone}
          teams={scoreboard}
          tasks={tasks}
          myteam={myteam}
          total_score={false}
          page_length={20}
          details={details}
        />
      </Layout>
    );
  }
}
export default withAuth()(MainScoreboard);
