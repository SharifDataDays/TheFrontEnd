import React from 'react';
import { Link } from 'rebass/styled-components';

export default function ReadMore({ href, direction }) {
  const content = direction === 'rtl' ? 'بیشتر بخوانید' : 'read more';
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
      {content}
    </Link>
  );
}
