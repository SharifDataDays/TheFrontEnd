import React from 'react';
import { Grid, Card, Item } from 'semantic-ui-react';

const description = [
  'Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their',
  'tiny stature, and even others for their massive size.',
].join(' ');

function Post() {
  return (
    <Item.Group style={{ direction: 'rtl' }}>
      <Item>
        <Item.Image size="small" src="https://react.semantic-ui.com/images/wireframe/image.png" />

        <Item.Content>
          <Item.Header as="a">Cute Dog</Item.Header>
          <Item.Description>
            <p>{description}</p>
            <p>Many people also have their own barometers for what makes a cute dog.</p>
          </Item.Description>
        </Item.Content>
      </Item>
    </Item.Group>
  );
}

export default Post;
