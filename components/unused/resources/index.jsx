import React from 'react';
import Head from 'next/head';
import Navbar from '~/components/global/navbar';
import Footer from '~/components/global/footer';
import Resources from '~/components/resources/index';

function ResourcesPage() {
  return (
    <>
      <Head>
        <title>منابع DataDays</title>
      </Head>
      <Navbar />
      <Resources />
      <Footer />
    </>
  );
}

export default ResourcesPage;
