import React from 'react';
import Head from 'next/head';
import Navbar from '~/components/global/navbar';
import Footer from '~/components/global/footer';
import Trials from '~/components/trial-pannel/index';

function ResourcesPage() {
  return (
    <>
      <Head>
        <title>صفحه‌ ی پنل</title>
      </Head>
      <Navbar />
      <Trials />
      <Footer />
    </>
  );
}

export default ResourcesPage;
