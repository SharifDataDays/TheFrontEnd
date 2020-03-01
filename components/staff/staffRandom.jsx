import React from 'react';
import { Card, Icon, Image, Header, Button } from 'semantic-ui-react';
import styled from 'styled-components';
import { space, color, border } from 'styled-system';
import _ from 'lodash';
import Person from './person';
import { Fade, Flip, Bounce, LightSpeed } from 'react-reveal';
import Pulse from 'react-reveal/Pulse';

const Container = styled.div`
  ${space}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #191919;
`;

const chooseRandom = (teams, count) => {
  let allStaffs = [];
  _.map(teams, (team) => {
    _.map(team.subteams, (subteam) => {
      _.map(subteam.staffs, (staff) => {
        allStaffs.push(staff);
      });
    });
  });

  return _.sampleSize(allStaffs, count);
};

const Staff = ({ staffs }) => {
  // console.log(team);
  const randomStaffs = chooseRandom(staffs, 5);
  return (
    <Container p={4}>
      <Header
        inverted
        textAlign="center"
        style={{
          paddingBottom: '20px',
          paddingTop: '15px',
          color: '#1d93f7',
        }}
        as="h1"
      >
        تیم ما
      </Header>
      <Fade left>
        <Card.Group itemsPerRow={5} centered dir="RTL">
          {_.map(randomStaffs, (staff, ind) => {
            console.log(staff);
            return <Person person={staff} key={ind} homePage={true} />;
          })}
        </Card.Group>
      </Fade>

      <Button
        primary
        textAlign="center"
        style={{
          marginTop: '30px',
        }}
        href="/staff"
      >
        مشاهده‌ی همه
      </Button>
    </Container>
  );
};

export default Staff;
