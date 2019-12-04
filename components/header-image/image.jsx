import React, { Component } from 'react';
import { Image } from 'rebass/styled-components';

function HeaderImageLaptop({ src }) {
  return (
    <Image
      className="image-header"
      src={src}
      sx={{
        maxWidth: '100%',
      
      }}
    />
  );
}

export default HeaderImageLaptop;
