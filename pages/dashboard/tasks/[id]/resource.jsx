import React from 'react';
import Head from 'next/head';
import Layout from '~/components/dashboard/layout';
import withNotLogged from '~/components/global/auth/withNotLogged';
import Resources from '~/components/dashboard/resources';

function ResourcesPage() {
  return (
    <>
      <Head>
        <title>صفحه‌ ی پنل</title>
      </Head>
      <Layout>
        <Resources />
      </Layout>
    </>
  );
}

export default withNotLogged(ResourcesPage);
