// @flow
import React from 'react';
import type { Node } from 'react';
import { Flex, Box } from 'rebass/styled-components';

type PropsType = {
  children: Node,
  bg: string,
};

const DefaultProps = {
  bg: 'background',
};

function Body({ children, bg }: PropsType = DefaultProps): Node {
  return (
    <Flex justifyContent="center" bg={bg} p={[3, 4, 5]}>
      <Box width={[1, 2 / 3, 7 / 12]} color="text">
        {children}
      </Box>
    </Flex>
  );
}

export default Body;
