import React from 'react';
import styled from 'styled-components';
import { Grid, Header as H, Image } from 'semantic-ui-react';
import { Fade } from 'react-reveal';
import { typography, space } from 'styled-system';

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
      <Grid stackable inverted centered>
        <Grid.Row>
          <Grid.Column textAlign="center" verticalAlign="middle" width={6}>
            <Fade left>
              <Image size="large" src="/images/logo.png" />
            </Fade>
          </Grid.Column>

          <Grid.Column textAlign="center" verticalAlign="middle" width={7}>
            <Fade right>
              <Header as="h1" fontSize={(5, 6, 6)}>
                {header}
              </Header>
              <Text fontSize={[4, 5, 5]}>{content}</Text>
            </Fade>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default Introduction;
