import React from 'react';
import { Text } from 'rebass/styled-components';

export default function PreviewContent({ fontSize, letterSpacing, direction, content }) {
  return (
    <Text
      fontSize={fontSize}
      color="black"
      sx={{
        fontFamily: 'Soleil_Light,Helvetica,Arial,sans-serif',
        letterSpacing,
        direction,
        display: 'block',
        textOverflow: 'ellipsis',
        wordWrap: 'break-word',
        overflow: 'hidden',
        maxHeight: '5.4em',
        lineHeight: '1.8em',
      }}
    >
      {content}
    </Text>
  );
}
