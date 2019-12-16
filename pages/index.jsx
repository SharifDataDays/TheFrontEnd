import React from 'react';
import Sponsers from '../components/sponsers';
import Stats from '../components/stats';
import Header from '~/components/home/header';

const logo1 = 'http://s6.picofile.com/file/8380759042/All_Logos39.png';
const logo2 = 'http://s6.picofile.com/file/8380760484/Bazaar_logo_and_logotype.png';
const logo3 = 'http://s7.picofile.com/file/8380759184/whicapp_%D8%A8%D9%84%D8%AF_logos_.png';
const logo4 = 'http://s7.picofile.com/file/8380759168/Tap30.png';
const logo5 = 'http://s6.picofile.com/file/8380759092/shariflogo.png';

const logos = [logo1, logo2, logo3, logo4, logo5];

const numberOfParticipants = 117;

function Home() {
  // let header = <img src={web2} style={{ position: 'relative', width: '100%' }} />;
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'relative' }}>
        {/* <Parall layers={layers} backgroundColor={backgroundColor} /> */}
      </div>

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

      {/* </Parall> */}
    </div>
  );
}

export default Home;
