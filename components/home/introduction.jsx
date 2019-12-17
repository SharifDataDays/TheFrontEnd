import React from 'react';
import styled from 'styled-components';
import { Grid, Header as H, Image } from 'semantic-ui-react';

const Header = styled(H)`
  font-size: 3rem;
`;

const Text = styled.p`
  font-size: 1.75rem;
  line-height: 1.5;
`;

function Introduction({ header, content }) {
  return (
    <div style={{ position: 'relative' }}>
      <Grid stackable inverted centered>
        <Grid.Row
          style={{
            padding: '12rem 2rem',
            backgroundColor: '#252525',
            color: 'white',
          }}
        >
          <Grid.Column width={6}>
            <Image style={{ padding: '2rem' }} size="large" src="/images/logo.png" />
          </Grid.Column>
          <Grid.Column textAlign="center" verticalAlign="middle" width={7}>
            <Header as="h1">{header}</Header>
            <Text>{content}</Text>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Introduction;
