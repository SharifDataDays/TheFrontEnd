import React from 'react';
import { Text } from 'rebass/styled-components';

export default function PreviewContent({ fontSize, letterSpacing, direction, content }) {
  const persionFont = 'IRANSans';
  const englishFonts = 'Soleil,Helvetica,Arial,sans-serif';
  const font = direction === 'rtl' ? persionFont : englishFonts;
  return (
    <Text
      fontSize={fontSize}
      color="black"
      sx={{
        fontFamily: font,
        letterSpacing,
        direction,
        display: 'block',
        textOverflow: 'ellipsis',
        wordWrap: 'break-word',
        overflow: 'hidden',
        maxHeight: '5.4em',
        lineHeight: '1.8em',
        opacity: '75%'
      }}
    >
      {content}
    </Text>
  );
}
