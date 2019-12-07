import React from 'react';
import { Heading } from 'rebass/styled-components';

export default function HeadingCard({ mt, mb, fontSize, direction, content }) {
  const persionFont = 'IRANSansWeb,Arial,Helvetica,sans-serif';
  const englishFonts = 'FreightSans';
  const font = direction === 'rtl' ? persionFont : englishFonts;
  const fontWeight = '600';
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
        fontWeight,
      }}
    >
      {content}
    </Heading>
  );
}
