// @flow
/* eslint-disable react/jsx-props-no-spreading, flowtype/require-parameter-type */
import React from 'react';
import type { Node } from 'react';
import MDX from './runtime';
import quizComponents from './components';
import defaultComponents from '~/components/global/mdx/defaultComponents';

const components = {
  ...defaultComponents,
  ...quizComponents,
};

function Content({ content }: { content: string }): Node {
  return <MDX components={components}>{content}</MDX>;
}

export default Content;
