import React from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';
import { Image as Im } from 'semantic-ui-react';

const Image = styled(Im)`
  position: absolute !important;
  left: 50%;
  top: 55%;
  transform: translateX(-50%) translateY(-50%);
`;

function Header() {
  return (
    <div>
      <Image src="/images/center.png" />
      <Particles
        width="100vw"
        height="100vh"
        style={{ backgroundColor: '#252525' }}
        params={{
          particles: {
            number: {
              value: 100,
            },
            size: {
              value: 0,
            },
          },
        }}
      />
    </div>
  );
}

export default Header;
