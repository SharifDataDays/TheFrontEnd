// @flow
/* eslint-disable react/jsx-props-no-spreading, flowtype/require-parameter-type */
import React from 'react';
import type { Node } from 'react';
import MDX from '@mdx-js/runtime';
import { Header, Divider, List, Table, Image } from 'semantic-ui-react';
import CodeBlock from './code';

const components = {
  h1: (props): Node => <Header as="h1" {...props} />,
  h2: (props): Node => <Header as="h2" {...props} />,
  h3: (props): Node => <Header as="h3" {...props} />,
  p: (props): Node => <p {...props} />,
  hr: (props): Node => <Divider {...props} />,
  ul: (props): Node => (
    <div dir="RTL">
      <List bulleted {...props} />
    </div>
  ),
  ol: (props): Node => (
    <div dir="RTL">
      <List ordered {...props} />
    </div>
  ),
  li: (props): Node => <List.Item {...props} />,
  pre: (props): Node => <div {...props} />,
  code: (props): Node => <CodeBlock {...props} />,
  table: (props): Node => (
    <div dir="RTL">
      <Table celled striped {...props} />
    </div>
  ),
  thead: (props): Node => <Table.Header {...props} />,
  tbody: (props): Node => <Table.Body {...props} />,
  tr: (props): Node => <Table.Row {...props} />,
  td: (props): Node => <Table.Cell {...props} />,
  img: (props): Node => <Image {...props} />,
};

function Content({ content }: { content: string }): Node {
  return <MDX components={components}>{content}</MDX>;
}

export default Content;
