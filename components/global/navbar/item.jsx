// @flow
import React from 'react';
import type { Node } from 'react';
import { Box } from 'rebass/styled-components';

function NavItem(props: { children: Node }): Node {
  const { children } = props;
  return (
    <Box bg="background" display="inline-block" ml={[0, 0, 3]}>
      {children}
    </Box>
  );
}

export default NavItem;
