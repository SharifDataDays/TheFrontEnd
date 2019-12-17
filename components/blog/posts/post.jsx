import React from 'react';
import { Card, Item, Image } from 'semantic-ui-react';

export function First({ title, description, date, image }) {
  return (
    <Card style={{ width: '100%' }}>
      <Image src="https://react.semantic-ui.com/images/wireframe/image.png" wrapped ui={false} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>{date}</Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
    </Card>
  );
}

export function Rest({ title, description, date, image }) {
  return (
    <Item.Group style={{ direction: 'rtl' }}>
      <Item>
        <Item.Image size="small" src="https://react.semantic-ui.com/images/wireframe/image.png" />
        <Item.Content>
          <Item.Header as="a">{title}</Item.Header>
          <Item.Meta>
            <span>{date}</span>
          </Item.Meta>
          <Item.Description>
            <p>{description}</p>
          </Item.Description>
        </Item.Content>
      </Item>
    </Item.Group>
  );
}
