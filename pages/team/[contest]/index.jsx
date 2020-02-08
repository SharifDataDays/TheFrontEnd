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
  static async getInitialProps({query}, token) {
    const cid = query.contest;
    console.log(cid)
    const res = await getTeamInfoAPI(cid, token);
    const teamData = res.data;
    const res2 = await getInvitationsAPI(cid, token);
    const teamInvitations = res2.data.team_invitations; //outgoing invitations
    const userInvitations = res2.data.user_invitations; //incoming invitations
    return { teamData, token, userInvitations, teamInvitations };
  }

  componentDidMount() {
    const { clear } = this.props;
    clear();
  }

  render() {
    const {
      token,
      team,
      teamData,
      userInvitations,
      teamInvitations,
      teamNameUpdate,
      finalize,
      answerInvitation,
      addMember,
    } = this.props;

    return (
      <>
        <Layout token={token} hasNavbar hasFooter>
          <Container
            token={token}
            team={team}
            teamData={teamData}
            userInvitations={userInvitations}
            teamNameUpdate={teamNameUpdate}
            answerInvitation={answerInvitation}
            addMember={addMember}
            finalize={finalize}
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
    teamNameUpdate: (fields, token) => {
      dispatch(teamNameUpdateAction(fields, token));
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
    finalize: (fields, token) => {
      dispatch(finalizeTeamAction(fields, token));
    },
  };
}

export default withAuth(true)(connect(mapStateToProps, mapDispatchToProps)(TeamPage));
