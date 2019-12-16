import _ from 'lodash';
import React from 'react';
import { Grid } from 'semantic-ui-react';
import Post from './post';

function Posts({ posts }) {
  return (
    <Grid style={{ margin: 0 }} centered>
      <Grid.Column width={8} computer={8} tablet={10} mobile={15}>
        {_.map(posts, (post) => {
          const { title_fa, image, date, description_fa } = post;
          return <Post title={title_fa} image={image} date={date} description={description_fa} />;
        })}
      </Grid.Column>
    </Grid>
  );
}

export default Posts;
