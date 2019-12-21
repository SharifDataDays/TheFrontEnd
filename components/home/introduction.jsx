import React from 'react';
import styled from 'styled-components';
import NoSSR from 'react-no-ssr';
import { Grid, Header as H, Responsive } from 'semantic-ui-react';
import { Fade } from 'react-reveal';
import { typography, space } from 'styled-system';

const Container = styled.div`
  ${space};
  color: white;
  position: relative;
  background-color: #1f1f1f;
  /* margin-top: -8px !important; */
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
    <NoSSR>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Container
          style={{
            backgroundImage: "url('/images/timeline.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          py={[5, 6, 6]}
        >
          <Grid stackable inverted centered>
            <Grid.Column textAlign="center" verticalAlign="middle" width={4} />

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
        <Container py={[5, 6, 6]}>
          {/* <Image src="/images/timeline.png" /> */}
          <Grid centered>
            <Grid.Column textAlign="center" verticalAlign="middle" width={14}>
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
    </NoSSR>
  );
}

export default Introduction;
