/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import withAuth from '~/components/global/withAuth';
import Layout from '~/components/global/layout';
import Trials from '~/components/dashboard/trials';
import { changeAnswerAction } from '~/redux/actions/trials';

class TrialsPage extends Component {
  static async getInitialProps(ctx, token) {
    return { token };
  }

  render() {
    const { trials, changeAnswer, token } = this.props;
    return (
      <Layout token={token} hasNavbar hasFooter>
        <Trials trials={trials} changeAnswer={changeAnswer} />
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
  };
}

export default withAuth(true)(connect(mapStateToProps, mapDispatchToProps)(TrialsPage));
