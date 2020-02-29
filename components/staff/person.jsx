import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const Person = (person) => {
  console.log(person);
  return (
    <Card color="blue">
      <Image src={'/images/logo.png'} wrapped ui={false} />
      <Card.Content>
        <Card.Header>person</Card.Header>
        <Card.Meta>Joined in 2016</Card.Meta>
        <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          10 Friends
        </a>
      </Card.Content>
    </Card>
  );
};

export default Person;
