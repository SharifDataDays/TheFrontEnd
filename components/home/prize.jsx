import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import { Image, Grid, Header as H } from 'semantic-ui-react';

const Container = styled.div`
  ${space};
  background-color: #06246d;
`;

const Header = styled(H)`
  color: white;
`;

function Prize({ prizes }) {
  const firstLearn = prizes[0].prize_fa;
  const secondLearn = prizes[1].prize_fa;
  const thirdLearn = prizes[2].prize_fa;
  const firstMain = prizes[3].prize_fa;
  const secondMain = prizes[4].prize_fa;
  const thirdMain = prizes[5].prize_fa;
  return (
    <Container py={[5, 6, 6]}>
      <Grid dir="RTL" centered>
        <Grid.Column computer={4} tablet={5} mobile={14} textAlign="center">
          <Image style={{ margin: 'auto' }} size="medium" src="/images/first.png" />
          <Header as="h2">{firstMain}</Header>
        </Grid.Column>
        <Grid.Column computer={4} tablet={5} mobile={14} textAlign="center">
          <Image style={{ margin: 'auto' }} size="medium" src="/images/second.png" />
          <Header as="h2">{secondMain}</Header>
        </Grid.Column>
        <Grid.Column computer={4} tablet={5} mobile={14} textAlign="center">
          <Image style={{ margin: 'auto' }} size="medium" src="/images/third.png" />
          <Header as="h2">{thirdMain}</Header>
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default Prize;
