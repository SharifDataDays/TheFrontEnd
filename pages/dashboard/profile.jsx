import React, { Component } from 'react';
import Profile from '~/components/dashboard/profile/index';
import Navbar from '~/components/dashboard/navbar';
import { profileAPI } from '~/redux/api/dashboard';
import withAuth from '~/components/global/withAuth';

class ProfilePage extends Component {
  static async getInitialProps(ctx, token) {
    const res = await profileAPI(token);
    const data = await res.data;
    return { data, token };
  }

  render() {
    const { data } = this.props;
    const { token } = this.props;

    return (
      <>
        <Navbar transparent />
        <Profile profileData={data} token={token} />;
      </>
    );
  }
}

export default withAuth(true)(ProfilePage)