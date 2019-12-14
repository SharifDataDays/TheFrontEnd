// @flow
import React from 'react';
import type { Node } from 'react';
import MDX from '@mdx-js/runtime';
import { Header } from 'semantic-ui-react';

const components = {
  h1: (props): Node => <Header as="h2" {...props} />,
  h2: (props): Node => <Header as="h3" {...props} />,
  h3: (props): Node => <Header as="h4" {...props} />,
  p: (props): Node => <p {...props} />,
};

function Content({ content }: { content: string }): Node {
  return <MDX components={components}>{content}</MDX>;
}

export default Content;
