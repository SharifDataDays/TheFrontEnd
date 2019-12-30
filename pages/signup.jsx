/* eslint-disable react/prefer-stateless-function */
import fetch from 'isomorphic-unfetch';
import React, { Component } from 'react';
import Head from 'next/head';
import withAuth from '~/components/global/withAuth';
import Container from '~/components/user/signup/container';
import { termsAPI } from '~/redux/api';

class SignupPage extends Component {
  static async getInitialProps(ctx) {
    const res = await fetch(termsAPI());
    const terms = await res.json();
    return { terms };
  }

  render() {
    const { terms } = this.props;
    return (
      <>
        <Head>
          <title>ثبت نام - DataDays 2020</title>
        </Head>
        <Container terms={terms} />
      </>
    );
  }
}

export default withAuth(false)(SignupPage);
