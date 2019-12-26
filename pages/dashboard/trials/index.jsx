import React from 'react';
import Head from 'next/head';
import Layout from '~/components/dashboard/layout';
import withNotLogged from '~/components/global/auth/withNotLogged';
import Trials from '~/components/dashboard/trials';

function ResourcesPage() {
  return (
    <>
      <Head>
        <title>صفحه‌ ی پنل</title>
      </Head>
      <Layout>
        <Trials />
      </Layout>
    </>
  );
}

export default withNotLogged(ResourcesPage);
