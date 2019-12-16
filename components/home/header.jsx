import React from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';
import { Responsive, Image as Im } from 'semantic-ui-react';

const Image = styled(Im)`
  position: absolute !important;
  left: 50%;
  top: 55%;
  transform: translateX(-50%) translateY(-50%);
`;

function ParticleContainer({ particleCount }) {
  return (
    <Particles
      width="100vw"
      height="100vh"
      style={{
        backgroundImage: 'linear-gradient(to top, #252525, #26292f, #222e38, #16343f, #003a42)',
        boxShadow: '0px 6px 20px 5px #252525',
      }}
      params={{
        particles: {
          number: {
            value: particleCount,
          },
          size: {
            value: 1,
          },
        },
      }}
    />
  );
}

function Header() {
  return (
    <div>
      <Image src="/images/center.png" />
      <Responsive maxWidth={Responsive.onlyTablet.minWidth - 1}>
        <ParticleContainer particleCount={30} />
      </Responsive>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <ParticleContainer particleCount={100} />
      </Responsive>
    </div>
  );
}

export default Header;
