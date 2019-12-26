// @flow
/* eslint-disable react/jsx-props-no-spreading, flowtype/require-parameter-type */
import React from 'react';
import type { Node } from 'react';
import { List, Table } from 'semantic-ui-react';
import CodeBlock from './code';

export default {
  root: (props): Node => <div dir="RTL" {...props} />,
  text: (props): Node => (
    <p
      style={{ fontSize: '2.5rem', lineHeight: 1.5, marginBottom: '0.75rem', direction: 'rtl' }}
      {...props}
    />
  ),
  list: (props): Node => (
    <div dir="RTL">
      <List ordered {...props} />
    </div>
  ),
  listItem: (props): Node => (
    <List.Item style={{ fontSize: '1.25rem', lineHeight: 1.25 }} {...props} />
  ),
  code: CodeBlock,
  table: (props): Node => (
    <div dir="RTL">
      <Table celled striped {...props} />
    </div>
  ),
  tableHead: (props): Node => <Table.Header {...props} />,
  tableBody: (props): Node => <Table.Body {...props} />,
  tableRow: (props): Node => <Table.Row {...props} />,
  tableCell: (props): Node => <Table.Cell {...props} />,
  // image: ImageBlock,
};
