import React from 'react';
import { Image } from 'rebass/styled-components';

function HeaderImageLaptop({ src, width, height }) {
  const borderRadius = '10px';
  return (
    <Image className="image-card" src={src} sx={{ width, height, marginTop: '0', borderRadius }} />
  );
}

export default HeaderImageLaptop;
