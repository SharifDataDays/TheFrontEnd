import React from 'react';
import { Grid } from 'semantic-ui-react';
import Headers from './headers';
import Content from '~/components/global/mdx';

function Container({ content }) {
  return (
    <Grid style={{ marginTop: '1rem' }} centered>
      <Grid.Column style={{ margin: '3rem' }} computer={3} only="computer">
        <Headers content={content} />
      </Grid.Column>
      <Grid.Column computer={10} tablet={12} mobile={14}>
        <Content content={content} />
      </Grid.Column>
    </Grid>
  );
}

export default Container;
