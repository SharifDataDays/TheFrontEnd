import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '~/components/dashboard/team/container';
import { getTeamInfoAPI, getInvitationsAPI } from '~/redux/api/team';
import { allContestsAPI } from '~/redux/api/dashboard';

import _ from 'lodash';

import {
  teamNameUpdateAction,
  finalizeTeamAction,
  teamClearAction,
  answerInvitationAction,
  addMemberAction,
} from '~/redux/actions/team';
import withAuth from '~/components/global/withAuth';
import Layout from '~/components/global/layout';
import NotFound from '~/components/global/notFound';

class TeamPage extends Component {
  static async getInitialProps({ query }, token) {
    const cid = query.contest;

    const res = await getTeamInfoAPI(cid, token);
    let status_code = 200;
    const teamData = res.data;

    if (!_.isUndefined(res.data.status_code)) status_code = res.data.status_code;
    if (status_code != 200) return { status_code, token };
    const res2 = await getInvitationsAPI(cid, token);

    const teamInvitations = res2.data.team_invitations; //outgoing invitations
    const userInvitations = res2.data.user_invitations; //incoming invitations

    const allRes = await allContestsAPI(token);
    const { contests } = allRes.data;
    const contest = contests.filter((a) => {
      return a.id + '' === cid + '';
    });

    
    const rules = contest[0].rules;

    return { teamData, token, userInvitations, teamInvitations, status_code, rules, cid };
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
      status_code,
      rules,
      cid
    } = this.props;

    return (
      <>
        <Layout token={token} hasNavbar hasFooter>
          {status_code !== 200 ? (
            <NotFound />
          ) : (
            <Container
              token={token}
              team={team}
              teamData={teamData}
              userInvitations={userInvitations}
              teamNameUpdate={teamNameUpdate}
              answerInvitation={answerInvitation}
              addMember={addMember}
              finalize={finalize}
              rules={rules}
              cid={cid}
            />
          )}
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
