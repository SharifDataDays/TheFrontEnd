import React from 'react';
import Head from 'next/head';
import Navbar from '~/components/global/navbar';
import Header from '~/components/home/header';
import Sponsers from '~/components/home/sponsors';
import Introduction from '~/components/home/introduction';
import Timeline from '~/components/home/newTimeline';

const logo1 = '/images/sponsors/Yektanet.png';
const logo2 = '/images/sponsors/Bazaar.png';
const logo3 = '/images/sponsors/Balad.png';
const logo4 = '/images/sponsors/Tap30.png';
const logo5 = '/images/sponsors/shariflogo.png';

const logos = [logo1, logo2, logo3, logo4, logo5];

const intro = {
  header: 'معرفی رویداد',
  content:
    'اولین رویداد علوم داده دانشگاه شریف، یک رقابت چند مرحله‌ای آموزشی است که مهمترین هدف آن، گسترش آموزش و ایجاد علاقه‌مندی در این حوزه به همراه محک زدن سطح دانش علوم داده در جامعه علمی ایران است. این رویداد با همکاری جمعی از دانشجویان دانشکده مهندسی کامپیوتر و با پشتیبانی اساتید پیشگام در این حوزه طراحی شده‌ است. مسائل این رقابت به گونه‌ای است که شرکت‌کنندگان با هر سطحی از دانش مبتدی تا متخصص بتوانند آورده‌ای از مسابقات داشته باشند.',
};

function Home() {
  let items = [
    { date: 'یک دی - سیزده دی', heading: 'ثبت نام', text: 'تحلیل داده' },
    { date: 'یک دی تا سیزده دی', heading: 'فاز 1', text: 'تحلیل داده' },
    { date: 'چهارده دی - هجده بهمن', heading: 'فاز 2', text: 'تحلیل داده' },
    { date: 'نوزده بهمن - یک اسفند', heading: 'فاز 3', text: 'تحلیل داده' },
    { date: 'ده اسفند', heading: 'مرحله حضوری', text: 'تحلیل داده' },
  ];
  return (
    <>
      <Head>
        <title>DataDays 2020</title>
      </Head>
      <Navbar transparent />
      <Header />
      <Introduction header={intro.header} content={intro.content} />
      <Timeline items={items}/>
      <Sponsers logos={logos} />
    </>
  );
}

export default Home;
