import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

function HeaderImageContainer({ src }) {
  return (
    <Grid style={{ margin: 0 }}>
      <Grid.Row style={{ backgroundColor: '#FFF0EB', direction: 'rtl' }}>
        <Image size="large" src="/images/blog.jpg" />
      </Grid.Row>
    </Grid>
  );
}

export default HeaderImageContainer;
