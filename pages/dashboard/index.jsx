import React, { Component } from 'react';
import Head from 'next/head';
import Layout from '~/components/dashboard/layout';
import withNotLogged from '~/components/global/auth/withNotLogged';
import { logout } from '~/utils/auth';

class DashboardPage extends Component {
  render() {
    return (
      <>
        <Head>
          <title>صفحه‌ ی پنل</title>
        </Head>
        <Layout>
          <p onClick={logout}>logout</p>
        </Layout>
      </>
    );
  }
}

export default withNotLogged(DashboardPage);
