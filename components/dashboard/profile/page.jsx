import React, { Component } from 'react';
import nextCookie from 'next-cookies';
import Profile from '~/components/dashboard/profile/index';
import Navbar from '~/components/dashboard/navbar';
import { profileAPI } from '~/redux/api/dashboard';
import { refreshAPI } from '~/redux/api/auth';

async function getResponse(api, data) {
  try {
    const response = await fetch(api, data);

    if (response.ok) {
      const res = await response.json();
      return res;
    }
    return { error: true };
  } catch (error) {
    return { error: true };
  }
}

export default class ProfilePage extends Component {
  static async getInitialProps(ctx) {
    const { token } = nextCookie(ctx);
    console.log('token1');
    console.log(token);
    // const initialRes = await getResponse(profileAPI(), {
    //   headers: {
    //     Authorization: `Bearer ${token.access}`,
    //   },
    // });
    // console.log('initialRes');
    // console.log(initialRes);

    // if (initialRes.status_code !== 200) {
    //   const newAccess = await getResponse(refreshAPI(), {
    //     method: 'post',
    //     headers: { 'content-type': 'application/json' },
    //     body: JSON.stringify({
    //       refresh: token.refresh,
    //     }),
    //   });

    //   if (newAccess.status_code === 200) {
    //     return {
    //       token: {
    //         refresh: token.refresh,
    //         access: newAccess.access,
    //       },
    //     };
    //   }
    // }
    console.log('token2');
    console.log(token);
    const res = await fetch(profileAPI(), {
      headers: {
        Authorization: `Bearer ${token ? token.access : token}`,
      },
    });
    const data = await res.json();
    return { data };
  }

  render() {
    const { data } = this.props;

    console.log(data);

    return (
      <>
        <Navbar transparent />
        <Profile profileData={data} />;
      </>
    );
  }
}
