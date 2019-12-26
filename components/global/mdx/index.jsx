// @flow
/* eslint-disable react/jsx-props-no-spreading, flowtype/require-parameter-type */
import React from 'react';
import type { Node } from 'react';
import MDX from './runtime';
import defaultComponents from './defaultComponents';

function Content({ content }: { content: string }): Node {
  return (
    <MDX style={{ padding: '1rem' }} components={defaultComponents}>
      {content}
    </MDX>
  );
}

export default Content;
