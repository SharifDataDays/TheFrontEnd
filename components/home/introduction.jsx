import React from 'react';
import styled from 'styled-components';
import { Grid, Header as H, Image, Responsive } from 'semantic-ui-react';
import { Fade } from 'react-reveal';
import { typography, space } from 'styled-system';

const Container = styled.div`
  ${space};
  color: white;
  position: relative;
  background-color: #1d93f7;
`;

const Header = styled(H)`
  ${typography}
`;

const Text = styled.p`
  ${typography};
  direction: rtl;
`;

function Introduction({ header, content }) {
  return (
    <>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Container
          style={{ backgroundImage: "url('/images/intro.png')", backgroundSize: 'cover' }}
          py={[5, 6, 6]}
        >
          <Grid stackable inverted centered>
            <Grid.Column textAlign="center" verticalAlign="middle" width={6} />

            <Grid.Column textAlign="center" verticalAlign="middle" width={6}>
              <Fade right>
                <Header as="h1" fontSize={(5, 6, 6)}>
                  {header}
                </Header>
                <Text fontSize={[4, 5, 5]}>{content}</Text>
              </Fade>
            </Grid.Column>
          </Grid>
        </Container>
      </Responsive>
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Container pb={[5, 6, 6]}>
          <Grid stackable inverted centered>
            <Image style={{ width: '100%' }} src="/images/intro.png" />
            <Grid.Column textAlign="center" verticalAlign="middle" width={6} />

            <Grid.Column textAlign="center" verticalAlign="middle" width={6}>
              <Fade right>
                <Header as="h1" fontSize={(5, 6, 6)}>
                  {header}
                </Header>
                <Text fontSize={[4, 5, 5]}>{content}</Text>
              </Fade>
            </Grid.Column>
          </Grid>
        </Container>
      </Responsive>
    </>
  );
}

export default Introduction;
