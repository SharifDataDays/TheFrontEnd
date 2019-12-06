import React from 'react';
import { Text } from 'rebass/styled-components';

export default function CategoriseCard({ content, mt, mb, fontSize, letterSpacing, direction }) {
  return (
    <Text
      mt={mt}
      mb={mb}
      fontSize={fontSize}
      color="black"
      sx={{
        fontFamily: 'Soleil_Light,Helvetica,Arial,sans-serif',
        letterSpacing,
        textTransfrom: 'uppercase',
        direction,
      }}
    >
      {content}
    </Text>
  );
}
