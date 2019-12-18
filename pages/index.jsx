import React from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import homeAPI from '~/redux/api/home';
import Navbar from '~/components/global/navbar';
import Footer from '~/components/global/footer';
import Header from '~/components/home/header';
import Sponsers from '~/components/home/sponsors';
import Introduction from '~/components/home/introduction';
import Timeline from '~/components/home/timeline';
import Prize from '~/components/home/prize';

function Home({ content }) {
  const { intro, timeline } = content;
  return (
    <>
      <Head>
        <title>DataDays 2020</title>
      </Head>
      <Navbar transparent />
      <Header />
      <Sponsers />
      <Introduction header={intro.header_fa} content={intro.text_fa} />
      <Timeline timeline={timeline} />
      <Prize />
      <Footer />
    </>
  );
}

Home.getInitialProps = async (context) => {
  const res = await fetch(homeAPI());
  const content = await res.json();
  return { content };
};

export default Home;
