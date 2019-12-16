import React from 'react';
import Navbar from '~/components/global/navbar';
import Header from '~/components/home/header';
import Sponsers from '~/components/home/sponsors';
import Introduction from '~/components/home/introduction';
// import Stats from '~/components/home/stats';

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
  return (
    <>
      <Navbar transparent />
      <Header />
      <Sponsers logos={logos} />
      <Introduction header={intro.header} content={intro.content} />
    </>
  );
}

export default Home;
