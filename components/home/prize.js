import React from 'react';
import { Image, Grid, Header } from 'semantic-ui-react';

const Prize = (props) => {
  return (
    <Grid centered stackable>
      <Grid.Row>
        <Grid.Column>
          <Image src="/images/second.png" />
          <Header as="h3">{'تیم دوم'}</Header>
        </Grid.Column>
        <Grid.Column>
          <Image src="/images/first.png" />
          <Header as="h3">{'تیم اول'}</Header>
        </Grid.Column>
        <Grid.Column>
          <Image src="/images/third.png" />
          <Header as="h3">{'تیم سوم'}</Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Prize;
