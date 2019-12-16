import React from 'react';
import Particles from 'react-particles-js';

function Header() {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 50,
          },
          size: {
            value: 3,
          },
        },
      }}
    />
  );
}

export default Header;
