import React from 'react';
import { Card, Item, Image } from 'semantic-ui-react';
import moment from 'jalali-moment';

export function First({ title, description, date, image, id }) {
  return (
    <Card href={`/blog/${id}`} style={{ width: '100%' }}>
      <Image src={image} wrapped ui={false} />
      <Card.Content style={{ direction: 'rtl', textAlign: 'justify' }}>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          {moment
            .from(date, 'en')
            .locale('fa')
            .fromNow()}
        </Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
    </Card>
  );
}

export function Rest({ title, description, date, image, id }) {
  return (
    <Item.Group style={{ direction: 'rtl' }}>
      <Item href={`/blog/${id}`}>
        <Item.Image size="small" src={image} />
        <Item.Content style={{ direction: 'rtl'  , textAlign: 'justify' }}>
          <Item.Header as="a">{title}</Item.Header>
          <Item.Meta>
            <span>
              {moment
                .from(date, 'en')
                .locale('fa')
                .fromNow()}
            </span>
          </Item.Meta>
          <Item.Description>
            <p>{description}</p>
          </Item.Description>
        </Item.Content>
      </Item>
    </Item.Group>
  );
}
