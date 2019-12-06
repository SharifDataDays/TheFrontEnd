import React from 'react';
import { Heading } from 'rebass/styled-components';

export default function HeadingCard({ mt, mb, fontSize, direction, content }) {
  return (
    <Heading
      mt={mt}
      mb={mb}
      fontSize={fontSize}
      color="black"
      sx={{
        fontFamily: 'Soleil_Bold,Helvetica,Arial,sans-serif',
        textTransfrom: 'uppercase',
        direction,
      }}
    >
      {content}
    </Heading>
  );
}
