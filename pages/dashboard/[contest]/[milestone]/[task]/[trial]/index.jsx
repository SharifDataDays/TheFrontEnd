/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import withAuth from '~/components/global/withAuth';
import Layout from '~/components/global/layout';
import Trials from '~/components/dashboard/trials';
import { getTrialAPI } from '~/redux/api/dashboard';
import { changeAnswerAction, submitAnswersAction } from '~/redux/actions/trials';
import _ from 'lodash';
import NotFound from '~/components/global/notFound';

class TrialsPage extends Component {
  static async getInitialProps(ctx, token) {
    const { query } = ctx;
    console.log("HERE")
    console.log(query)
    const res = await getTrialAPI(token, query.contest, query.milestone, query.task, query.trial);
    let status_code = 200;
    if (!_.isUndefined(res.data.status_code)) {
      status_code = res.data.status_code;
    }
    const { data } = res;
    return { status_code, token, questions: data, ...query };
  }

  render() {
    const {
      trials,
      changeAnswer,
      submit,
      token,
      questions,
      contest,
      milestone,
      task,
      trial,
      status_code,
    } = this.props;
    return (
      <Layout token={token} hasNavbar hasFooter>
        {status_code !== 200 ? (
          <NotFound />
        ) : (
          <Trials
            token={token}
            trials={trials}
            changeAnswer={changeAnswer}
            submit={submit}
            contest={contest}
            milestone={milestone}
            task={task}
            trial={trial}
            questions={questions}
          />
        )}
      </Layout>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { trials } = state;
  return {
    trials,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    changeAnswer: (answer) => dispatch(changeAnswerAction(answer)),
    submit: (token, contestId, milestoneId, taskId, trialId, final) =>
      dispatch(submitAnswersAction(token, contestId, milestoneId, taskId, trialId, final)),
  };
}

export default withAuth(true)(connect(mapStateToProps, mapDispatchToProps)(TrialsPage));
