/* eslint-disable react/prefer-stateless-function */
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import React, { Component } from 'react';
import nextCookie from 'next-cookies';
import { login } from '~/utils/auth';
import { authAPI, refreshAPI } from '~/redux/api/auth';
import Container from '~/components/user/login/container';
import Loading from '~/components/global/loading';

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

class LoginPage extends Component {
  static async getInitialProps(ctx) {
    const { token } = nextCookie(ctx);

    if (!token) {
      return {
        state: '',
      };
    }

    const initialRes = await getResponse(authAPI(), {
      headers: {
        Authorization: `Bearer ${token.access}`,
      },
    });

    if (initialRes.status_code !== 200) {
      const newAccess = await getResponse(refreshAPI(), {
        method: 'post',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          refresh: token.refresh,
        }),
      });

      if (newAccess.status_code === 200) {
        return {
          state: 'login',
          token: {
            refresh: token.refresh,
            access: newAccess.access,
          },
        };
      }
      return {
        state: '',
      };
    }
    return {
      state: 'login',
      token,
    };
  }

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    const { state, token } = this.props;
    if (state === 'login') {
      login({ token });
    } else {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { loading } = this.state;

    return (
      <div>
        <Head>
          <title>ورود - DataDays 2020</title>
        </Head>
        {loading ? <Loading /> : <Container />}
      </div>
    );
  }
}

export default LoginPage;
