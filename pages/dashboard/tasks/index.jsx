import React from 'react';
import Head from 'next/head';
import Layout from '~/components/dashboard/layout';
import withNotLogged from '~/components/global/auth/withNotLogged';
import Tasks from '~/components/dashboard/tasks';

function TaskPage() {
  return (
    <>
      <Head>
        <title>صفحه‌ ی پنل</title>
      </Head>
      <Layout>
        <Tasks />
      </Layout>
    </>
  );
}

export default withNotLogged(TaskPage);
