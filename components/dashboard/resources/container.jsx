import React from 'react';
import ReactMarkdown from 'react-markdown';
import parseHtml from './parse';
import CodeBlock from './code';

function Container({ content }) {
  return (
    <ReactMarkdown
      source={content}
      escapeHtml={false}
      skipHtml={false}
      renderers={{ code: CodeBlock }}
      astPlugins={[parseHtml]}
    />
  );
}

export default Container;
