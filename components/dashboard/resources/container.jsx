import React from 'react';
import { Grid } from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown';
import parseHtml from './parse';
import CodeBlock from './code';

function Container({ content }) {
  return (
    <Grid style={{ marginTop: '1rem' }} centered>
      <Grid.Column computer={10} tablet={12} mobile={14}>
        <ReactMarkdown
          source={content}
          escapeHtml={false}
          skipHtml={false}
          renderers={{ code: CodeBlock }}
          astPlugins={[parseHtml]}
        />
      </Grid.Column>
    </Grid>
  );
}

export default Container;
