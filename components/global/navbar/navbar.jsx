// @flow
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';
import { border } from 'styled-system';
import { Flex, Box } from 'rebass/styled-components';

const defaultProps = {
  header: <></>,
  start: <></>,
  end: <></>,
  extras: <></>,
};

const BorderedBox = styled(Box)`
  ${border};
`;

function LargeNavbar({
  header,
  start,
  end,
  extras,
}: {
  header: Node,
  start: Node,
  end: Node,
  extras: Node,
} = defaultProps): Node {
  return (
    <BorderedBox borderBottom="1px solid" borderColor="#e2e2e2">
      <Flex alignItems="center" px={6} py={1} bg="background">
        {header}
        {start}
        <Box mx="auto" />
        {end}
        {extras}
      </Flex>
    </BorderedBox>
  );
}

function SmallNavbar({
  header,
  start,
  end,
  extras,
}: {
  header: Node,
  start: Node,
  end: Node,
  extras: Node,
} = defaultProps): Node {
  return (
    <BorderedBox borderBottom="1px solid" borderColor="#e2e2e2">
      <Flex alignItems="center" px={3} py={0} bg="background">
        {header}
        <Box mx="auto" />
        {extras}
      </Flex>
      <Flex alignItems="center" px={0} py={0} bg="background">
        <Box display="inline-block">
          {start}
          {end}
        </Box>
      </Flex>
    </BorderedBox>
  );
}

export default LargeNavbar;
