import React, { Component } from 'react';
import Container from '~/components/dashboard/profile/Container';
import { profileAPI } from '~/redux/api/dashboard';
import withAuth from '~/components/global/withAuth';
import { connect } from 'react-redux';
import {
  profileUpdateAction,
  profileClearAction,
  passwordUpdateAction,
} from '~/redux/actions/profile';
import Layout from '~/components/global/layout';

class ProfilePage extends Component {
  static async getInitialProps(ctx, token) {
    const res = await profileAPI(token);
    const profileData = res.data;
    return { profileData, token };
  }

  componentDidMount() {
    const { clear } = this.props;
    clear();
  }

  render() {
    const { profileData, token, update, profile, clear, password_update } = this.props;

    return (
      <>
        <Layout token={token} hasNavbar hasFooter>
          <Container
            profile={profile}
            profileData={profileData}
            token={token}
            update={update}
            clear={clear}
            password_update={password_update}
          />
          ;
        </Layout>
      </>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { profile } = state;
  return {
    profile,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    update: (fields, token) => {
      dispatch(profileUpdateAction(fields, token));
    },
    password_update: (fields, token) => {
      dispatch(passwordUpdateAction(fields, token));
    },
    clear: () => {
      dispatch(profileClearAction());
    },
  };
}

export default withAuth(true)(connect(mapStateToProps, mapDispatchToProps)(ProfilePage));
