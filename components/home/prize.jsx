import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import NoSSR from 'react-no-ssr';
import { Divider, Image, Grid, Header as H, Responsive } from 'semantic-ui-react';
import { Zoom, Fade } from 'react-reveal';

const Container = styled.div`
  ${space};
  background-color: #202020;
`;

const Header = styled(H)`
  color: white;
`;

function Prize({ prizes }) {
  const firstMain = prizes[0].prize_fa;
  const secondMain = prizes[1].prize_fa;
  const thirdMain = prizes[2].prize_fa;
  return (
    <NoSSR>
      <Container py={[4, 5, 5]}>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Grid dir="RTL" centered>
            <Grid.Row>
              <Grid.Column
                style={{ marginTop: '10rem' }}
                computer={4}
                tablet={5}
                mobile={14}
                textAlign="center"
              >
                <Zoom>
                  <Image style={{ margin: 'auto' }} size="medium" src="/images/second.png" />
                  <Header as="h2" style={{ margin: '1rem' }}>
                    {secondMain}
                  </Header>
                </Zoom>
              </Grid.Column>
              <Grid.Column computer={4} tablet={5} mobile={14} textAlign="center">
                <Zoom>
                  <Image style={{ margin: 'auto' }} size="medium" src="/images/first.png" />
                  <Header as="h2" style={{ margin: '1rem' }}>
                    {firstMain}
                  </Header>
                </Zoom>
              </Grid.Column>
              <Grid.Column
                style={{ marginTop: '10rem' }}
                computer={4}
                tablet={5}
                mobile={14}
                textAlign="center"
              >
                <Zoom>
                  <Image style={{ margin: 'auto' }} size="medium" src="/images/third.png" />
                  <Header as="h2" style={{ margin: '1rem' }}>
                    {thirdMain}
                  </Header>
                </Zoom>
              </Grid.Column>
            </Grid.Row>
            <Divider hidden />
            <Divider hidden />
            <Divider hidden />
            {/* <Grid.Row>
              <Fade>
                <Header as="h3" style={{ margin: '1rem' }}>
                  دو تیم از تیم‌های چهارم تا بیستم: هرکدام ۲ میلیون تومان
                </Header>
              </Fade>
            </Grid.Row> */}
          </Grid>
        </Responsive>
        <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
          <Grid dir="RTL" centered>
            <Grid.Row>
              <Grid.Column computer={4} tablet={5} mobile={14} textAlign="center">
                <Zoom>
                  <Image style={{ margin: 'auto' }} size="small" src="/images/first.png" />
                  <Header as="h2" style={{ margin: '2rem' }}>
                    {firstMain}
                  </Header>
                </Zoom>
              </Grid.Column>
              <Grid.Column computer={4} tablet={5} mobile={14} textAlign="center">
                <Zoom>
                  <Image style={{ margin: 'auto' }} size="small" src="/images/second.png" />
                  <Header as="h2" style={{ margin: '2rem' }}>
                    {secondMain}
                  </Header>
                </Zoom>
              </Grid.Column>
              <Grid.Column computer={4} tablet={5} mobile={14} textAlign="center">
                <Zoom>
                  <Image style={{ margin: 'auto' }} size="small" src="/images/third.png" />
                  <Header as="h2" style={{ margin: '2rem' }}>
                    {thirdMain}
                  </Header>
                </Zoom>
              </Grid.Column>
            </Grid.Row>
            <Divider hidden />
            <Divider hidden />
            <Divider hidden />
            {/* <Grid.Row>
              <Fade>
                <Header as="h3" style={{ margin: '1rem', padding: '1.5rem' }}>
                  دو تیم از تیم‌های چهارم تا بیستم: هرکدام ۲ میلیون تومان
                </Header>
              </Fade>
            </Grid.Row> */}
          </Grid>
        </Responsive>
      </Container>
    </NoSSR>
  );
}

export default Prize;
