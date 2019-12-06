// @flow
import React from 'react';
import type { Node } from 'react';
import MDX from '@mdx-js/runtime';
import { Heading, Text } from 'rebass/styled-components';

const components = {
  h1: (props): Node => (
    <Heading fontSize={[7, 7, 7]} lineHeight={2.5} fontWeight="bold" {...props} />
  ),
  h2: (props): Node => <Heading fontSize={[6, 6, 6]} lineHeight={2} fontWeight="bold" {...props} />,
  h3: (props): Node => (
    <Heading fontSize={[5, 5, 5]} lineHeight={1.75} fontWeight="bold" {...props} />
  ),
  p: (props): Node => <Text fontSize={[5, 5, 5]} lineHeight={1.5} {...props} />,
};

function Content({ content }: { content: string }): Node {
  return <MDX components={components}>{content}</MDX>;
}

export default Content;
