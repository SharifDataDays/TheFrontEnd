import React from 'react';
import Navbar from '~/components/global/navbar';
import Header from '~/components/home/header';
import Sponsers from '~/components/home/sponsors';
import Timeline from '~/components/home/newTimeline'

// import Stats from '~/components/home/stats';
const logo1 = '/images/sponsors/Yektanet.png';
const logo2 = '/images/sponsors/Bazaar.png';
const logo3 = '/images/sponsors/Balad.png';
const logo4 = '/images/sponsors/Tap30.png';
const logo5 = '/images/sponsors/shariflogo.png';

const logos = [logo1, logo2, logo3, logo4, logo5];

function Home() {
  let items = [
    {date : '1 دی', heading : 'فاز 1', text : 'تحلیل داده'},
    {date : '1 دی', heading : 'فاز 1', text : 'تحلیل داده'},
    {date : '1 دی', heading : 'فاز 1', text : 'تحلیل داده'},
    {date : '1 دی', heading : 'فاز 1', text : 'تحلیل داده'},
    {date : '1 دی', heading : 'فاز 1', text : 'تحلیل داده'},
  ]
  return (
    <>
      <Navbar transparent />
      <Header />
      <Timeline items={items}/>
      <Sponsers logos={logos} />
    </>
  );
}

export default Home;
