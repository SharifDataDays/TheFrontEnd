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
import Stats from '~/components/home/stats';
import CountDown from '../components/home/countdown';

class HomePage extends Component {
  static async getInitialProps(ctx) {
    const res = await homeAPI();
    const content = res.data;
    return { content };
  }

  render() {
    const { content } = this.props;
    const { intro, timeline, prizes, counts, timer} = content;

    return (
      <>
        <Head>
          <title>DataDays 2020</title>
        </Head>
        <Navbar transparent/>
        <Header/>
        <Sponsers/>
        <CountDown timer={timer}/>
        <Introduction header={intro.header_fa} content={intro.text_fa}/>
        <Stats counts={counts}/>

        <Timeline timeline={timeline}/>
        <Prize prizes={prizes}/>
        <Footer/>
      </>
    );
  }
}

export default withAuth(false)(HomePage);
