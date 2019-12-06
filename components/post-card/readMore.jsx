import React from 'react';
import { Link } from 'rebass/styled-components';

export default function ReadMore({ href, direction }) {
  return (
    <Link
      href={href}
      sx={{
        fontFamily: 'Soleil_Light,Helvetica,Arial,sans-serif',
        letterSpacing: '1px',
        direction,
      }}
      color="black"
    >
      read more
    </Link>
  );
}
