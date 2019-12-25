import React from 'react';
import Head from 'next/head';
import Navbar from '~/components/global/navbar';
import Footer from '~/components/global/footer';
import Content from '~/components/trial-pannel/trials-mobile';
import Header from '~/components/trial-pannel/header-desktop';

function ResourcesPage() {
  return (
    <>
      <Head>
        <title>صفحه‌ ی پنل</title>
      </Head>
      <Navbar />
      <Content />
      <Footer />
    </>
  );
}

export default ResourcesPage;
