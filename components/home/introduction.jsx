import React from 'react';
import styled from 'styled-components';
import { typography, space } from 'styled-system';
import { Grid, Header as H, Image } from 'semantic-ui-react';

const Header = styled(H)`
  ${typography}
`;

const Container = styled.div`
  ${space};
  background-color: #06246d;
  color: white;
  position: relative;
`;

const Text = styled.p`
  ${typography};
  direction: rtl;
`;

function Introduction({ header, content }) {
  return (
    <Container py={[5, 6, 6]}>
      <Grid pt={5} stackable inverted centered>
        <Grid.Row>
          <Grid.Column textAlign="center" verticalAlign="middle" width={6}>
            <Image style={{ padding: '2rem' }} size="large" src="/images/logo.png" />
          </Grid.Column>
          <Grid.Column textAlign="center" verticalAlign="middle" width={7}>
            <Header as="h1" fontSize={[6, 7, 7]}>
              {header}
            </Header>
            <Text fontSize={[3, 5, 5]}>{content}</Text>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default Introduction;
