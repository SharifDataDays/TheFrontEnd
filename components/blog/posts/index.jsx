import _ from 'lodash';
import React from 'react';
import { Grid } from 'semantic-ui-react';
import { First, Rest } from './post';

function Posts({ posts }) {
  return (
    <Grid style={{ margin: 0 }} centered>
      <Grid.Column computer={8} tablet={10} mobile={15}>
        {_.map(posts, (post, i) => {
          const { title_fa, image, date, description_fa, id } = post;
          if (i === 0) {
            return (
              <First
                key={i}
                title={title_fa}
                image={image}
                date={date}
                description={description_fa}
                id={id}
              />
            );
          }
          return (
            <Rest key={i} title={title_fa} image={image} date={date} description={description_fa} />
          );
        })}
      </Grid.Column>
    </Grid>
  );
}

export default Posts;
