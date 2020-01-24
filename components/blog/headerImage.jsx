import React from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';

function HeaderImageContainer() {
  console.log("oyyyyyyyyyyyy")
  return (
    <Grid style={{ margin: 0, backgroundColor: '#FFF0EB', direction: 'rtl' }}>
      <Grid.Column floated="left" computer={5} tablet={5} mobile={15}>
        <Image size="large" src="/images/header.jpg" />
      </Grid.Column>
      <Grid.Column verticalAlign="bottom" floated="right" computer={5} tablet={5} mobile={15}>
        <Header as="h1" style={{ fontSize: '7rem' }}>
          بلاگ
        </Header>
      </Grid.Column>
    </Grid>
  );
}

export default HeaderImageContainer;
