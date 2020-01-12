import _ from 'lodash';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import MathJax from 'react-mathjax2';
import parseHtml from './parse';
import CodeBlock from './code';

function Container({ content }) {
  const modifiedContent = _.replace(
    _.replace(
      _.replace(content, /\$\$(.+?)\$\$/gs, (x) => {
        return `<p class="math">${_.replace(x, /\$/g, '')}</p>`;
      }),
      /\$(.+?)\$/gs,
      (x) => {
        return `<p class="inline">${_.replace(x, /\$/g, '')}</p>`;
      },
    ),
    /\\begin\{equation\}(.+?)\\end\{equation\}/gs,
    (x) => {
      return `<p class="math">${x}</p>`;
    },
  );

  return (
    <MathJax.Context input="tex">
      <ReactMarkdown
        source={modifiedContent}
        escapeHtml={false}
        skipHtml={false}
        renderers={{ code: CodeBlock }}
        astPlugins={[parseHtml]}
      />
    </MathJax.Context>
  );
}

export default Container;
