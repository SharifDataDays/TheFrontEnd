import React from 'react';
import { Grid, Card } from 'semantic-ui-react';

function Post() {
  return (
    <Grid.Column>
      <Card
        style={{ width: '100%' }}
        image="https://source.unsplash.com/random/350x350"
        header="Elliot Baker"
        meta="Friend"
        description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
        extra={<p>See More</p>}
      />
    </Grid.Column>
  );
}

export default Post;
