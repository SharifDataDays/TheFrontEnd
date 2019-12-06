// @flow
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';
import { background } from 'styled-system';
import { Box } from 'rebass/styled-components';

const BackgroundBox = styled(Box)`
  ${background};
`;

function HeaderImage({ url }: { url: string }): Node {
  return (
    <BackgroundBox
      py={[6, 6, 7]}
      backgroundImage={`url('${url}')`}
      backgroundSize="cover"
      // backgroundRepeat="no-repeat"
      backgroundPosition="center"
    />
  );
}

export default HeaderImage;
