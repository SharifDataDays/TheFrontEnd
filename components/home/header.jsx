import React from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';
import NoSSR from 'react-no-ssr';
import { Responsive, Image as Im, Header as H } from 'semantic-ui-react';
import Subscribe from './subscribe';

const Image = styled(Im)`
  position: absolute !important;
  left: 50%;
  top: 50%;
  @media (min-width: 768px) {
    height: 100vh;
  }
  transform: translateX(-50%) translateY(-50%);
  
  padding: 2rem;
`;

function ParticleContainer({ particleCount }) {
  return (
    <Particles
      width="100vw"
      height="100vh"
      style={{
        backgroundImage: 'linear-gradient(to bottom, #101010, #141414, #171717, #1a1a1a, #202020)',
      }}
      params={{
        particles: {
          number: {
            value: particleCount,
          },
          coloe: {
            value: '#1d93f7',
          },
          line_linked: {
            color: '#1d93f7',
            width: 2,
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
    <NoSSR>
      <Image size="large" src="/images/center.png" />
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <ParticleContainer particleCount={30} />
        <Subscribe />
      </Responsive>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <ParticleContainer particleCount={100} />
        <Subscribe />
      </Responsive>
    </NoSSR>
  );
}

export default Header;
