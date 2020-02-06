import Head from 'next/head';
import React, { Component } from 'react';
import withAuth from '~/components/global/withAuth';
import Layout from '~/components/global/layout';
import Tasks from '~/components/dashboard/tasks';
import Trials from '~/components/dashboard/trial/list/index'
import { milestoneAPI, trialsListAPI } from '~/redux/api/dashboard';
import { Tab, Menu } from 'semantic-ui-react';
import NoSSR from 'react-no-ssr';

class TaskPage extends Component {
  static async getInitialProps({ query }, token) {
    const { contest, milestone, task } = query;
    const res = await milestoneAPI(contest, milestone, token);
    console.log(res.data.milestone.tasks[4].trials)
    return { milestone: res.data.milestone, cid: contest, mid: milestone, token };
  }


  panes = () => {
    const { milestone, cid, mid } = this.props;
    return [
      {
        menuItem: (
          <Menu.Item style={{ marginLeft: 'auto', width: '50%', justifyContent: 'center' }}>
            ارزشیابی
          </Menu.Item>
        ),
        render: () => <Tab.Pane attached={false}><Trials tasks={milestone.tasks}/></Tab.Pane>,
      },
      {
        menuItem: (
          <Menu.Item style={{ marginLeft: 'auto', width: '50%', justifyContent: 'center' }}>
            محتوا
          </Menu.Item>
        ),
        render: () => (
          <Tab.Pane attached={false}>
            <Tasks cid={cid} mid={mid} milestone={milestone} />
          </Tab.Pane>
        ),
      },
    ];
  };

  render() {
    const { milestone, cid, mid, token } = this.props;
    return (
      <>
        <Head>
          <title>DataDays 2020</title>
        </Head>
        <Layout token={token} hasNavbar>
          <Tab
            defaultActiveIndex={1}
            menu={{ borderless: true, attached: false, tabular: false }}
            panes={this.panes()}
          />
        </Layout>
      </>
    );
  }
}

export default withAuth(true)(TaskPage);
