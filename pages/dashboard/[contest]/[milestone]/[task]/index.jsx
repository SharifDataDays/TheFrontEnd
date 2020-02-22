import Head from 'next/head';
import React, { Component } from 'react';
import withAuth from '~/components/global/withAuth';
import Layout from '~/components/global/layout';
import Resources from '~/components/dashboard/resources';
import NotFound from '~/components/dashboard/resources/notFound';
import { taskAPI, contentAPI, milestoneAPI } from '~/redux/api/dashboard';
import _ from 'lodash';

class ResourcesPage extends Component {
  static async getInitialProps({ query }, token) {
    const res0 = await taskAPI(query.contest, query.milestone, query.task, token);
    let status_code = 200;
    if (!_.isUndefined(res0.data.status_code)) {
      status_code = res0.data.status_code;
    }
    let task = {
      status_code,
    };

    if (status_code === 200) {
      const contentID = res0.data.content.id;
      const res = await contentAPI(contentID, token);
      const content_finished = res0.data.content_finished;
      task = { ...res.data, ...{ content_finished } };
    }
    const res2 = await milestoneAPI(query.contest, query.milestone, token);
    let image = '';
    if (!_.isUndefined(res2.data.milestone)) image = res2.data.milestone.image;

    return {
      image,
      task,
      token,
      contestId: query.contest,
      milestoneId: query.milestone,
      taskId: query.task,
    };
  }

  render() {
    const { task, token, contestId, milestoneId, taskId, image } = this.props;
    return (
      <>
        <Head>
          <title>DataDays 2020</title>
        </Head>
        <Layout token={token} hasNavbar hasFooter>
          {task.status_code !== 200 ? (
            <NotFound />
          ) : (
            <Resources
              content={task}
              contestId={contestId}
              milestoneId={milestoneId}
              taskId={taskId}
              token={token}
              image={image}
            />
          )}
        </Layout>
      </>
    );
  }
}

export default withAuth(true)(ResourcesPage);
