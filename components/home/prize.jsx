import React from 'react';
import { Image, Grid, Header } from 'semantic-ui-react';

function Prize() {
  return (
    <Grid style={{ backgroundColor: '#252525' }} centered stackable>
      <Grid.Column desktop={4} tablet={5} mobile={14}>
        <Image src="/images/second.png" />
        <Header as="h3" color="white">
          تیم دوم
        </Header>
      </Grid.Column>
      <Grid.Column desktop={4} tablet={5} mobile={14}>
        <Image src="/images/first.png" />
        <Header as="h3" color="white">
          تیم اول
        </Header>
      </Grid.Column>
      <Grid.Column desktop={4} tablet={5} mobile={14}>
        <Image src="/images/third.png" />
        <Header as="h3" color="white">
          تیم سوم
        </Header>
      </Grid.Column>
    </Grid>
  );
}

export default Prize;
