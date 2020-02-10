// @flow
/* eslint-disable react/jsx-props-no-spreading, flowtype/require-parameter-type */
import React from 'react';
import type { Node } from 'react';
import { Header, Divider, List, Table, Image } from 'semantic-ui-react';
import CodeBlock from './code';

export default {
  div: (props): Node => (
    <div
      style={{ fontSize: '1.5rem', lineHeight: 1.5, marginBottom: '0.75rem', direction: 'rtl' }}
      {...props}
    />
  ),
  h1: (props): Node => (
    <div dir="RTL">
      <Header
        as="h1"
        style={{ fontSize: '3rem', lineHeight: 1.5, marginBottom: '3rem' }}
        {...props}
      />
    </div>
  ),
  h2: (props): Node => (
    <div dir="RTL">
      <Header
        as="h2"
        style={{ fontSize: '2.25rem', lineHeight: 1.5, marginBottom: '2rem' }}
        {...props}
      />
    </div>
  ),
  h3: (props): Node => (
    <div dir="RTL">
      <Header
        as="h3"
        style={{ fontSize: '2rem', lineHeight: 1.5, marginBottom: '1rem' }}
        {...props}
      />
    </div>
  ),
  p: (props): Node => (
    <p
      style={{ fontSize: '1.5rem', lineHeight: 1.5, marginBottom: '0.75rem', direction: 'rtl' }}
      {...props}
    />
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
  a: (props): Node => <a target="_blank" rel="noopener noreferrer" {...props} />,
};
