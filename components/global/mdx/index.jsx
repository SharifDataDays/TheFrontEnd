// @flow
/* eslint-disable react/jsx-props-no-spreading, flowtype/require-parameter-type */
import React from 'react';
import type { Node } from 'react';
import MDX from './runtime';
import { Header, Divider, List, Table, Image } from 'semantic-ui-react';
import CodeBlock from './code';

const components = {
  h1: (props): Node => (
    <div dir="RTL">
      <Header as="h1" style={{ fontSize: '3rem', lineHeight: 3 }} {...props} />
    </div>
  ),
  h2: (props): Node => (
    <div dir="RTL">
      <Header as="h2" style={{ fontSize: '2.25rem', lineHeight: 2 }} {...props} />
    </div>
  ),
  h3: (props): Node => (
    <div dir="RTL">
      <Header as="h3" style={{ fontSize: '2rem', lineHeight: 1.75 }} {...props} />
    </div>
  ),
  p: (props): Node => (
    <div dir="RTL">
      <p style={{ fontSize: '1.5rem', lineHeight: 1.5, marginBottom: '0.75rem' }} {...props} />
    </div>
  ),
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
  li: (props): Node => <List.Item style={{ fontSize: '1.25rem', lineHeight: 1.25 }} {...props} />,
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
