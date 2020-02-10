import React from 'react';
import styled from 'styled-components';
import { space, color } from 'styled-system';
import NoSSR from 'react-no-ssr';
import { Divider, Image, Grid, Header as H, Responsive } from 'semantic-ui-react';
import { Zoom, Fade } from 'react-reveal';
import _ from 'lodash';

const Container = styled.div`
  ${space}

  background-color: rgba(29, 147, 247, 0.9);
  border-radius: 10px;
  color: white;
`;

const Header = styled.text`
  color: white;
  font-size: 25px;
`;

function Box({ contest }) {
  console.log(contest);
  return (
    <a href={`/dashboard/${contest.id}`}>
      <Grid.Column>
        <Container p={5} m={5}>
          <Header>{contest.title}</Header>
          <Divider inverted />
        </Container>
      </Grid.Column>
    </a>
  );
}

export default Box;
