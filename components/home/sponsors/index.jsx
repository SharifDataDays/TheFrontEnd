import _ from 'lodash';
import React from 'react';
import styled from 'styled-components';
import { Grid as G } from 'semantic-ui-react';
import Logo from './logo';

const Grid = styled(G)`
  margin-top: 1.5rem !important;
`;

function Sponsors({ logos }) {
  return (
    <Grid centered>
      {_.map(logos, (logo, i) => {
        return (
          <Grid.Column textAlign="center" computer={2} tablet={3} mobile={14} key={i}>
            <Logo src={logo} height={60} />
          </Grid.Column>
        );
      })}
    </Grid>
  );
}

export default Sponsors;
