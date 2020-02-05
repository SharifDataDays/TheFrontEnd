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
    const cid = 2;
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
    console.log(this.state);
    console.log(this.props);
    
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
    console.log(team)
    return (
      <>
        <Layout token={token} hasNavbar hasFooter>
          <Container
            token={token}
            team={team}
            teamData={teamData}
            userInvitations={userInvitations}
            teamInvitations={teamInvitations}
            teamNameUpdate={teamNameUpdate}
            finalize={finalize}
            answerInvitation={answerInvitation}
            addMember={addMember}
          />
          ;
        </Layout>
      </>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { team } = state;
  console.log(state)
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
