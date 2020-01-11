import React from 'react';
import { Grid, Segment, Image, Header as H } from 'semantic-ui-react';
import styled from 'styled-components';

const Header = styled(H)`
  margin-bottom: 2.5rem !important;
  color: white;
  font-size: 35px;
`;

const Text = styled.p`
  font-size: 17px;
  color: white;
  direction: rtl;
`;

function HeaderSection({ title, description, image }) {
  return (
    <Grid
      style={{
        marginBottom: '8rem',
        backgroundColor: '#505763',
      }}
      centered
    >
      <Grid.Column computer={4} tablet={4} mobile={15}>
        <Segment basic>
          <Image src={image} size="big" verticalAlign="middle" centered />
        </Segment>
      </Grid.Column>
      <Grid.Column computer={7} tablet={7} mobile={15}>
        <Segment basic style={{ textAlign: 'right !important' }}>
          <Header as="h1">{title}</Header>
          <Text>{description}</Text>
        </Segment>
      </Grid.Column>
    </Grid>
  );
}

export default HeaderSection;
