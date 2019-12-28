import React, { Component } from 'react';
import nextCookie from 'next-cookies';
import Profile from '~/components/dashboard/profile/index';
import Navbar from '~/components/dashboard/navbar';
import { profileAPI } from '~/redux/api/dashboard';
import { getToken } from '~/components/dashboard/profile/api';

export default class ProfilePage extends Component {
  static async getInitialProps(ctx) {
    let { token } = nextCookie(ctx);
    token = await getToken(token);
    const res = await fetch(profileAPI(), {
      headers: {
        Authorization: `Bearer ${token ? token.access : token}`,
      },
    });
    const data = await res.json();
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
