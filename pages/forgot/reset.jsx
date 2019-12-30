/* eslint-disable react/prefer-stateless-function */
import Head from 'next/head';
import React, { Component } from 'react';
import withAuth from '~/components/global/withAuth';
import Container from '~/components/user/forgot/reset/container';

class LoginPage extends Component {
  static async getInitialProps(ctx) {
    const { uid, token } = ctx.query;
    return { uid, token };
  }

  render() {
    const { uid, token } = this.props;
    return (
      <>
        <Head>
          <title>تغییر رمز عبور - DataDays 2020</title>
        </Head>
        <Container uid={uid} token={token} />
      </>
    );
  }
}

export default withAuth(false)(LoginPage);
