import React from 'react';
import { Grid } from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown';
import renderers from './components';

function Container({ content }) {
  return (
    <Grid style={{ marginTop: '1rem' }} centered>
      <Grid.Column computer={10} tablet={12} mobile={14}>
        <ReactMarkdown escapeHtml={false} source={content} renderers={renderers} />
      </Grid.Column>
    </Grid>
  );
}

export default Container;
