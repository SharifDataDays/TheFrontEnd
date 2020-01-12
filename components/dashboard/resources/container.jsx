import _ from 'lodash';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import unified from 'unified';
import parse from 'rehype-parse';
import math from 'remark-math';
import rehype2remark from 'rehype-remark';
import remark2rehype from 'remark-rehype';
import katex from 'rehype-katex';
import stringify from 'rehype-stringify';
import MathJax from 'react-mathjax2';
import parseHtml from './parse';
import CodeBlock from './code';

function Container({ content }) {
  const processor = unified()
    .use(parse)
    .use(rehype2remark)
    .use(math)
    .use(remark2rehype)
    .use(katex)
    .use(stringify);

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

  console.log(modifiedContent);

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
