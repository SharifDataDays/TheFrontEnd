import _ from 'lodash';
import React from 'react';
import styled from 'styled-components';
import SH from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const SyntaxHighlighter = styled(SH)`
  text-align: left !important;
`;

function CodeBlock({ children, className }) {
  const language = _.replace(className, /language-/, '');
  return (
    <SyntaxHighlighter language={language} style={dark}>
      {children}
    </SyntaxHighlighter>
  );
}

export default CodeBlock;
