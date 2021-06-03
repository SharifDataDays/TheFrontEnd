import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '~/components/dashboard/profile/container';
import { profileAPI } from '~/redux/api/dashboard';
import withAuth from '~/components/global/withAuth';
import {getUniversities, getFields, getBmp} from '~/components/dashboard/profile/dropdownOptions';

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
    const uni = await getUniversities();
    const major  = await getFields();
    const bmp = await getBmp()
    const options = {
      uni,
      major,
      bmp
    }
    return { profileData, token , options};
  }

  componentDidMount() {
    const { clear } = this.props;
    clear();
  }

  render() {
    const { profileData, token, update, profile, clear, password_update, options } = this.props;

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
            options={options}
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
