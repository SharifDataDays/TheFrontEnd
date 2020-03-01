import React from 'react';
import { Card as C, Icon, Image } from 'semantic-ui-react';
import styled from 'styled-components';
import { space, color, border } from 'styled-system';
import _ from 'lodash';

const Card = styled(C)`
  ${space}
  ${color}
  ${border}
`;

const Person = ({ person }) => {
  //  console.log(person);

  if (_.isUndefined(person.image) || _.isNull(person.image) || person.image === '')
    person.image = '/images/logo.png';

  return (
    <Card
      color="blue"
      centered
      m={5}
      dir="RTL"
      style={{
        width: '150px',
      }}
    >
      {/* <Image src={'/images/logo.png'} wrapped ui={false} /> */}
      {/* <Image src={person.image} wrapped ui={false} /> */}
      {/* <Image
        src={'https://datadays.ir' + person.image}
        wrapped
        ui={false}
        style={{
          //  width: '150px',
          height: '150px',
          overflow: 'hidden',
          backgroundSize: 'cover',
          objectFit: 'cover'
          
        }}
      
      /> */}
      <img
        src={person.image}
        // wrapped
        // ui={false}
        style={{
          //  width: '150px',
          height: '150px',
          overflow: 'hidden',
          backgroundSize: 'cover',
          objectFit: 'cover',
        }}
      />

      <Card.Content textAlign="center">
        <Card.Header
          style={{
            fontSize: '16px',
            paddingBottom: '5px',
          }}
        >
          {person.name_fa}
        </Card.Header>
        <Card.Meta>{person.title_fa}</Card.Meta>
      </Card.Content>
    </Card>
  );
};

export default Person;
