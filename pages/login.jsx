/* eslint-disable react/prefer-stateless-function */
import fetch from 'isomorphic-unfetch';
import Router from 'next/router';
import Head from 'next/head';
import React, { Component } from 'react';
import nextCookie from 'next-cookies';
import { authAPI } from '~/redux/api/auth';
import Container from '~/components/user/login/container';

class LoginPage extends Component {
  static async getInitialProps(ctx) {
    const { token } = nextCookie(ctx);

    const redirectOnError = () =>
      typeof window !== 'undefined'
        ? Router.push('/login')
        : ctx.res.writeHead(302, { Location: '/login' }).end();

    try {
      const response = await fetch(authAPI(), {
        credentials: 'include',
        headers: {
          Authorization: JSON.stringify({
            access: token.access,
            refresh: token.refresh,
          }),
        },
      });

      if (response.ok) {
        const js = await response.json();
        return js;
      }
      return redirectOnError();
    } catch (error) {
      // Implementation or Network error
      return redirectOnError();
    }
  }

  render() {
    return (
      <div>
        <Head>
          <title>ورود - DataDays 2020</title>
        </Head>
        <Container />
      </div>
    );
  }
}

export default LoginPage;
