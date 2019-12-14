// @flow
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';
import { Grid as G } from 'semantic-ui-react';

const Grid = styled(G)`
  ${color};
`;

type PropsType = {
  children: Node,
  bg: string,
};

const DefaultProps = {
  bg: 'background',
};

function Body({ children, bg }: PropsType = DefaultProps): Node {
  return (
    <Grid bg={bg} centered>
      <Grid.Column computer={8} tablet={10} mobile={16}>
        {children}
      </Grid.Column>
    </Grid>
  );
}

export default Body;
