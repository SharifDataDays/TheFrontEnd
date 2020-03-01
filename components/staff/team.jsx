import React from 'react';
import { Card, Icon, Image, Header } from 'semantic-ui-react';
import styled from 'styled-components';
import { space, color, border } from 'styled-system';
import _ from 'lodash';
import Person from './person';
import { Fade, Flip, Bounce, LightSpeed } from 'react-reveal';
import Pulse from 'react-reveal/Pulse';

const Container = styled.div`
  ${space}
  ${color}
  ${border}
`;

const Team = ({ team }) => {
  // console.log(team);
  return (
    <Fade bottom>
      <Container>
        {_.map(team.subteams, (subteam, ind) => {
          // console.log(subteam);
          return (
            <Container pt={4} key={ind}>
              {subteam.title_fa === team.title_fa ? (
                <></>
              ) : (
                <Header
                  inverted
                  textAlign="center"
                  style={{
                    paddingBottom: '20px',
                    paddingTop: '15px',
                  }}
                >
                  {subteam.title_fa}
                </Header>
              )}

              <Card.Group itemsPerRow={5} centered dir="RTL">
                {_.map(subteam.staffs, (staff, ind) => {
                  return <Person person={staff} key={ind}></Person>;
                })}
              </Card.Group>
            </Container>
          );
        })}
      </Container>
    </Fade>
  );
};

export default Team;
