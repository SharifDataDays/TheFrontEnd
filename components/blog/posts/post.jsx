import React from 'react';
import { Card, Item, Image } from 'semantic-ui-react';
import moment from 'jalali-moment';
import { BASE } from '~/redux/api/index';

export function First({ title, description, date, image, id }) {
  return (
    <Card href={`/blog/${id}`} style={{ width: '100%' }}>
      <Image src={BASE + image} wrapped ui={false} />
      <Card.Content style={{ direction: 'rtl' }}>
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

export function Rest({ title, description, date, image }) {
  return (
    <Item.Group style={{ direction: 'rtl' }}>
      <Item>
        <Item.Image size="small" src="https://react.semantic-ui.com/images/wireframe/image.png" />
        <Item.Content style={{ direction: 'rtl' }}>
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
