import React from 'react';
import { Item } from 'semantic-ui-react';

function Post({ title, description, date, image }) {
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

export default Post;
