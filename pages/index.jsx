import React from 'react';
import Navbar from '~/components/global/navbar';
import Header from '~/components/home/header';
import Sponsers from '~/components/home/sponsers';
import Stats from '~/components/home/stats';

const logo1 = '/home/sponsors/Yektanet.png';
const logo2 = '/home/sponsors/Bazaar.png';
const logo3 = '/home/sponsors/Balad.png';
const logo4 = '/home/sponsors/Tap30.png';
const logo5 = '/home/sponsors/shariflogo.png';

const logos = [logo1, logo2, logo3, logo4, logo5];

const numberOfParticipants = 117;

function Home() {
  // let header = <img src={web2} style={{ position: 'relative', width: '100%' }} />;
  return (
    <>
      <Navbar transparent />
      <Header />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <Stats participants={numberOfParticipants} />

        <Sponsers logos={logos} />
      </div>
    </>
  );
}

export default Home;
