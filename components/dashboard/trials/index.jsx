import React from 'react';
import { Grid } from 'semantic-ui-react';
import Questions from './questions';

function Trials() {
  return (
    <Grid style={{ margin: '2rem auto', direction: 'rtl' }} centered>
      <Grid.Row>
        <Grid.Column computer={10} tablet={12} mobile={14}>
          <Questions />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Trials;
