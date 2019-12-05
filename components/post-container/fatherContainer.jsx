import React, { Component } from 'react';
import { Image, Flex } from 'rebass/styled-components';

export default function FatherContainer({ justifyContent, width, bg, mt }) {
  return (
    <Flex
      flexDirection="row"
      flexWrap="wrap"
      justifyContent={justifyContent}
      width={width}
      bg={bg}
      height="1000px"
      m="0 auto"
      mt={mt}
    >
      {' '}
      <div />{' '}
    </Flex>
  );
}
