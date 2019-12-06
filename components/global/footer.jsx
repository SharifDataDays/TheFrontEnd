// @flow
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';
import { border, position } from 'styled-system';
import { Flex, Box } from 'rebass/styled-components';
import Responsive from './responsive';

const BorderedBox = styled(Box)`
  ${border};
  ${position};
`;

function Footer(): Node {
  return (
    <BorderedBox
      width={1}
      bottom={0}
      position="absolute"
      borderTop="1px solid"
      borderColor="#e2e2e2"
      color="background"
      bg="text"
    >
      <Flex px={5} py={4}>
        <Box width={1 / 3}>test</Box>
      </Flex>
    </BorderedBox>
  );
}

export default Footer;
