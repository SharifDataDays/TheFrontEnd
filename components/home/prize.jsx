import React from 'react';
import { Image, Grid } from 'semantic-ui-react';

function Prize() {
  return (
    <Grid
      style={{ backgroundColor: '#06246D ', paddingTop: '7rem', paddingBottom: '7rem' }}
      centered
    >
      <Grid.Column computer={4} tablet={5} style={{ paddingTop: '15rem' }}>
        <Image size="medium" src="/images/second.png" />
      </Grid.Column>
      <Grid.Column computer={4} tablet={5}>
        <Image size="medium" src="/images/first.png" />
      </Grid.Column>
      <Grid.Column computer={4} tablet={5} style={{ paddingTop: '15rem' }}>
        <Image size="medium" src="/images/third.png" />
      </Grid.Column>
    </Grid>
  );
}

export default Prize;
