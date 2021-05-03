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
import Layout from '~/components/global/layout';
import Staff from '~/components/staff/staffRandom';
import IntroImages from '~/components/home/introImages';
import { staffAPI } from '~/redux/api/home';

class HomePage extends Component {
  // static async getInitialProps(ctx, token) {
  //   const res = await homeAPI();
  //   const content = res.data;
  //   const res2 = await staffAPI();
  //   const staffs = res2.data;

  //   return { staffs, content, token };
  // }

  render() {
    // const { token, content, staffs } = this.props;
    // const { intro, timeline, prizes, counts, timer } = content;
    const prizes = [{ prize_fa: '۱۲ میلیون تومان' }, { prize_fa: '۸ میلیون تومان' }, { prize_fa: '۴ میلیون تومان' }];
    return (
      <>
        <Head>
          <title>DataDays 2021</title>
        </Head>
        <Navbar transparent />
        <Layout hasNavbar hasFooter transparent>
          <Header />
          <IntroImages />
          <Prize prizes={prizes} />
          <Sponsers />

          {/* <CountDown timer={timer} /> */}
          {/* <Introduction header={intro.header_fa} content={intro.text_fa} /> */}
          {/* <Stats counts={counts} /> */}
          {/* <Timeline timeline={timeline} /> */}

          {/* <Staff staffs={staffs} /> */}
        </Layout>

        {/* <Footer/> */}
      </>
    );
  }
}

export default HomePage;
