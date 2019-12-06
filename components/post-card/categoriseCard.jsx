import React from 'react';
import { Text } from 'rebass/styled-components';

export default function CategoriseCard({ content, mt, mb, fontSize, letterSpacing, direction }) {
  const persionFont = 'IRANSansWeb,Arial,Helvetica,sans-serif';
  const englishFonts = 'Soleil_Bold,Helvetica,Arial,sans-serif';
  const font = direction === 'rtl' ? persionFont : englishFonts;
  if (direction === 'rtl') {
    fontSize = '17px';
  }
  const fontWeight = '100';
  return (
    <Text
      mt={mt}
      mb={mb}
      fontSize={fontSize}
      color="black"
      sx={{
        fontFamily: font,
        letterSpacing,
        textTransfrom: 'uppercase',
        direction,
        fontWeight,
      }}
    >
      {content}
    </Text>
  );
}
