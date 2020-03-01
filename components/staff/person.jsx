import React from 'react';
import { Card as C, Icon, Image } from 'semantic-ui-react';
import styled from 'styled-components';
import { space, color, border } from 'styled-system';
import _ from 'lodash';
import { Fade, Flip } from 'react-reveal';

const Card = styled(C)`
  ${space}
  ${color}
  ${border}
`;

const Person = ({ person, homePage }) => {
  const width = homePage ? '130px' : '150px';

  //  console.log(person);

  if (_.isUndefined(person.image) || _.isNull(person.image) || person.image === '')
    person.image = '/images/logo.png';

  return (
    <Card
      color="blue"
      centered
      // m={5}
      dir="RTL"
      style={{
        width: width,
        margin: '10px',
      }}
    >
      {/* <Image src={person.image} wrapped ui={false} /> */}

      <img
        // src={person.image}
        src={'https://datadays.ir' + person.image}
        // wrapped
        // ui={false}
        style={{
          //  width: width,
          height: width,
          overflow: 'hidden',
          backgroundSize: 'cover',
          objectFit: 'cover',
        }}
      />

      <Card.Content textAlign="center">
        <Card.Header
          style={{
            fontSize: homePage ? '14px' : '16px',
          }}
        >
          {person.name_fa}
        </Card.Header>
        {homePage ? (
          <></>
        ) : (
          <Card.Meta
            style={{
              paddingTop: '5px',
            }}
          >
            {person.title_fa}
          </Card.Meta>
        )}
      </Card.Content>
    </Card>
  );
};

export default Person;
