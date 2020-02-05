import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '~/components/dashboard/team/Container';
import { getTeamInfoAPI, getInvitationsAPI } from '~/redux/api/team';
import {
  teamNameUpdateAction,
  finalizeTeamAction,
  teamClearAction,
  answerInvitationAction,
  addMemberAction,
} from '~/redux/actions/team';
import withAuth from '~/components/global/withAuth';
import Layout from '~/components/global/layout';

class TeamPage extends Component {
  static async getInitialProps(ctx, token) {
    console.log(token);
    const cid = 2;
    const res = await getTeamInfoAPI(cid, token);
    const teamData = res.data;
    return { teamData, token };
  }

  componentDidMount() {
    const { clear } = this.props;
    clear();
  }

  render() {
    const { token, teamData } = this.props;
    return (
      <>
        <Layout token={token} hasNavbar hasFooter>
          <Container
            token={token}
            teamData={teamData}
            // profile={profile}
            // profileData={profileData}
            // update={update}
            // clear={clear}
            // password_update={password_update}
          />
          ;
        </Layout>
      </>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { team } = state;
  return {
    team,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    teamUpdate: (fields, token) => {
      dispatch(teamNameUpdateAction(fields, token));
    },
    finalize: (fields, token) => {
      dispatch(finalizeTeamAction(fields, token));
    },
    clear: () => {
      dispatch(teamClearAction());
    },
    answerInvitation: (fields, token) => {
      dispatch(answerInvitationAction(fields, token));
    },
    addMember: (fields, token) => {
      dispatch(addMemberAction(fields, token));
    },
  };
}

export default withAuth(true)(connect(mapStateToProps, mapDispatchToProps)(TeamPage));
