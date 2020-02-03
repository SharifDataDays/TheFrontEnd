import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '~/components/dashboard/team/Container';
import { getTeamInfoAPI } from '~/redux/api/dashboard';
import withAuth from '~/components/global/withAuth';
import {
  profileUpdateAction,
  profileClearAction,
  passwordUpdateAction,
} from '~/redux/actions/profile';
import Layout from '~/components/global/layout';

class ProfilePage extends Component {
  static async getInitialProps(ctx, token) {
    console.log(token)
    const res = await getTeamInfoAPI(token);
    const teamData = res.data;
    return { teamData, token };
  }

  // componentDidMount() {
  //   const { clear } = this.props;
  //   clear();
  // }

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
  // const { profile } = state;
  return {
    //   profile,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    // update: (fields, token) => {
    //   dispatch(profileUpdateAction(fields, token));
    // },
    // password_update: (fields, token) => {
    //   dispatch(passwordUpdateAction(fields, token));
    // },
    // clear: () => {
    //   dispatch(profileClearAction());
    // },
  };
}

export default withAuth(true)(connect(mapStateToProps, mapDispatchToProps)(ProfilePage));
