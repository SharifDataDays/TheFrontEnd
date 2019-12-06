import React from 'react';
import { Heading } from 'rebass/styled-components';

export default function HeadingCard({ mt, mb, fontSize, direction, content }) {
  const persionFont = 'IRANSansWeb,Arial,Helvetica,sans-serif';
  const englishFonts = 'Soleil_Bold,Helvetica,Arial,sans-serif';
  const font = direction === 'rtl' ? persionFont : englishFonts;
  return (
    <Heading
      mt={mt}
      mb={mb}
      fontSize={fontSize}
      color="black"
      sx={{
        fontFamily: font,
        textTransfrom: 'uppercase',
        direction,
      }}
    >
      {content}
    </Heading>
  );
}
