import _ from 'lodash';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import MathJax from 'react-mathjax2';
import { Table, Image, Header, List, Divider } from 'semantic-ui-react';
import parseHtml from './parse';
import CodeBlock from './code';

function Container({ content }) {
  // console.log(content)
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
        renderers={{
          code: CodeBlock,
          image: (props) => <img style={{ width: '100%' }} {...props} />,
          table: (props) => <Table {...props} />,
          tableHead: (props) => <Table.Header {...props} />,
          tableBody: (props) => <Table.Body {...props} />,
          tableRow: (props) => <Table.Row {...props} />,
          tableCell: (props) => <Table.Cell {...props} />,
        }}
        astPlugins={[parseHtml]}
       
      />
    </MathJax.Context>
  );
}

export default Container;
