import Head from 'next/head';
import React, { Component } from 'react';
import withAuth from '~/components/global/withAuth';
import Navbar from '~/components/global/navbar';
import Footer from '~/components/global/footer';
import Header from '~/components/home/header';
import Sponsers from '~/components/home/sponsors';
import Introduction from '~/components/home/introduction';
import Timeline from '~/components/home/timeline';
import Prize from '~/components/home/prize';
import homeAPI from '~/redux/api/home';
import Stats from '~/components/home/Stats';

class HomePage extends Component {
  static async getInitialProps(ctx) {
    const res = await homeAPI();
    const content = res.data;
    return { content };
  }

  render() {
    const { content } = this.props;
    const { intro, timeline, prizes, counts } = content;

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
        <Stats counts={counts} />
        <Prize prizes={prizes} />
        <Footer />
      </>
    );
  }
}

export default withAuth(false)(HomePage);
