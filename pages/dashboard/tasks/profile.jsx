import React, { Component } from 'react';
import nextCookie from 'next-cookies';
import Profile from '~/components/dashboard/profile/index';
import Navbar from '~/components/dashboard/navbar';
import { profileAPI } from '~/redux/api/dashboard';

export default class ProfilePage extends Component {
  static async getInitialProps(ctx) {
    const { token } = nextCookie(ctx);
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
    console.log(data);

    return (
      <>
        <Navbar transparent />
        <Profile profileData={data} token={token} />;
      </>
    );
  }
}
