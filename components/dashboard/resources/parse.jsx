import _ from 'lodash';
import React from 'react';
import MathJax from 'react-mathjax2';
import LanguageDetect from 'languagedetect';
import { Table, Image, Header, List, Divider } from 'semantic-ui-react';
import htmlParser from 'react-markdown/plugins/html-parser';

const lngDetector = new LanguageDetect();

export default htmlParser({
  isValidNode: (node) => true,
  processingInstructions: [
    {
      shouldProcessNode(node) {
        return node.name && node.name === 'div';
      },
      processNode(node, children) {
        return (
          <div style={{ marginBottom: '1rem' }} dir="RTL">
            {children}
          </div>
        );
      },
    },
    {
      shouldProcessNode(node) {
        return node.name && node.name === 'font';
      },
      processNode(node, children) {
        return (
          <font {...node.attribs} style={{ lineHeight: 1.5 }} face="IRANSans" size="5">
            {children}
          </font>
        );
      },
    },
    {
      shouldProcessNode(node) {
        return node.name && node.name === 'style';
      },
      processNode(node, children) {
        return <></>;
      },
    },
    {
      shouldProcessNode(node) {
        return node.name && node.name === 'h1';
      },
      processNode(node) {
        return (
          <Header
            as="h1"
            style={{ fontSize: '3rem', lineHeight: 1.5, marginBottom: '3rem', direction: 'rtl' }}
          >
            {node.children[0].data}
          </Header>
        );
      },
    },
    {
      shouldProcessNode(node) {
        return node.name && node.name === 'h2';
      },
      processNode(node) {
        return (
          <Header
            as="h2"
            style={{ fontSize: '2.25rem', lineHeight: 1.5, marginBottom: '3rem', direction: 'rtl' }}
          >
            {node.children[0].data}
          </Header>
        );
      },
    },
    {
      shouldProcessNode(node) {
        return node.name && node.name === 'h3';
      },
      processNode(node) {
        return (
          <Header as="h3" style={{ fontSize: '2rem', lineHeight: 1.5, marginBottom: '1rem' }}>
            {node.children[0].data}
          </Header>
        );
      },
    },
    {
      shouldProcessNode(node) {
        return node.name && node.name === 'h4';
      },
      processNode(node) {
        return (
          <Header as="h4" style={{ fontSize: '1.75rem', lineHeight: 1.5, marginBottom: '1rem' }}>
            {node.children[0].data}
          </Header>
        );
      },
    },
    {
      shouldProcessNode(node) {
        return node.name && node.name === 'figure';
      },
      processNode(node, children) {
        return <figure style={{ textAlign: 'center' }}>{children}</figure>;
      },
    },
    {
      shouldProcessNode(node) {
        return node.name && node.name === 'figcaption';
      },
      processNode(node, children) {
        return <figcaption style={{ textAlign: 'center' }}>{children}</figcaption>;
      },
    },
    {
      shouldProcessNode(node) {
        return node.name && node.name === 'img';
      },
      processNode(node) {
        return <Image style={{ margin: '3rem auto' }} src={node.attribs.src} />;
      },
    },
    {
      shouldProcessNode(node) {
        return node.name && node.name === 'table';
      },
      processNode(node, children) {
        return (
          <div style={{ marginBottom: '3rem', width: '100%', overflowX: 'scroll' }}>
            <Table celled striped stackable={false}>
              {children}
            </Table>
          </div>
        );
      },
    },
    {
      shouldProcessNode(node) {
        return node.name && node.name === 'thead';
      },
      processNode(node, children) {
        return <Table.Header>{children}</Table.Header>;
      },
    },
    {
      shouldProcessNode(node) {
        return node.name && node.name === 'tbody';
      },
      processNode(node, children) {
        return <Table.Body>{children}</Table.Body>;
      },
    },
    {
      shouldProcessNode(node) {
        return node.name && node.name === 'tr';
      },
      processNode(node, children) {
        return <Table.Row>{children}</Table.Row>;
      },
    },
    {
      shouldProcessNode(node) {
        return node.name && node.name === 'th';
      },
      processNode(node, children) {
        return <Table.HeaderCell>{children}</Table.HeaderCell>;
      },
    },
    {
      shouldProcessNode(node) {
        return node.name && node.name === 'td';
      },
      processNode(node, children) {
        return <Table.Cell>{children}</Table.Cell>;
      },
    },
    {
      shouldProcessNode(node) {
        return node.name && node.name === 'ul';
      },
      processNode(node, children) {
        return (
          <div style={{ margin: '2rem' }} dir="rtl">
            <List
              bulleted
              style={{
                fontSize: '1.5rem',
                lineHeight: 1.5,
                marginBottom: '0.75rem',
                direction: 'rtl',
              }}
            >
              {children}
            </List>
          </div>
        );
      },
    },
    {
      shouldProcessNode(node) {
        return node.name && node.name === 'ol';
      },
      processNode(node, children) {
        return (
          <div style={{ margin: '2rem' }} dir="RTL">
            <List
              ordered
              style={{
                fontSize: '1.5rem',
                lineHeight: 1.5,
                marginBottom: '0.75rem',
                direction: 'rtl',
              }}
            >
              {children}
            </List>
          </div>
        );
      },
    },
    {
      shouldProcessNode(node) {
        return node.name && node.name === 'li';
      },
      processNode(node, children) {
        return <List.Item style={{ fontSize: '1.5rem' }}>{children}</List.Item>;
      },
    },
    {
      shouldProcessNode(node) {
        return node.name && node.name === 'hr';
      },
      processNode(node, children) {
        return <Divider />;
      },
    },
    {
      shouldProcessNode(node) {
        return node.name && node.name === 'br';
      },
      processNode(node, children) {
        return <br />;
      },
    },
    {
      shouldProcessNode(node) {
        return node.name && node.name === 'code';
      },
      processNode(node, children) {
        return (
          <code
            dir="rtl"
            style={{ fontSize: '1.5rem', backgroundColor: '#eeeeee', direction: 'ltr' }}
          >
            {children}
          </code>
        );
      },
    },
    {
      shouldProcessNode(node) {
        return node.name && node.name === 'p';
      },
      processNode(node, children) {
        if (node.attribs.class === 'math') {
          return (
            <div dir="ltr" style={{ fontSize: '1.5rem' }}>
              <MathJax.Node>{node.children[0].data}</MathJax.Node>
            </div>
          );
        }
        if (node.attribs.class === 'inline') {
          return (
            <span dir="ltr" style={{ fontSize: '1.5rem' }}>
              <MathJax.Node inline>{_.get(node, 'children[0].data', 'shit')}</MathJax.Node>
            </span>
          );
        }
        const text = _.get(node, 'children[0].data', '');
        const isFarsi = _.get(lngDetector.detect(text), '0.0', 'farsi') === 'farsi';
        return (
          <span
            dir={isFarsi ? 'rtl' : 'ltr'}
            // dir="rtl"
            style={{
              fontSize: '1.5rem',
              lineHeight: 1.5,
              marginBottom: '0.75rem',
            }}
          >
            {text}
          </span>
        );
      },
    },
    {
      shouldProcessNode(node) {
        return node.name && node.name === 'a';
      },
      processNode(node, children) {
        return (
          <a
            href={node.attribs.href}
            style={{ fontSize: '1.5rem' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        );
      },
    },
    {
      shouldProcessNode(node) {
        return node.name && node.name === 'blockquote';
      },
      processNode(node, children) {
        return (
          <blockquote
            style={{ color: 'grey', borderRight: '5px solid #e0e1e2', paddingRight: '2rem' }}
          >
            {children}
          </blockquote>
        );
      },
    },
    {
      shouldProcessNode(node) {
        return node.name && node.name === 'strong';
      },
      processNode(node, children) {
        return <strong style={{ fontSize: '1.5rem' }}>{children}</strong>;
      },
    },
    {
      shouldProcessNode(node) {
        return node.name && node.name === 'em';
      },
      processNode(node, children) {
        return <em style={{ fontSize: '1.5rem' }}>{children}</em>;
      },
    },
    {
      shouldProcessNode(node) {
        return node.type && node.type === 'span';
      },
      processNode(node) {
        return (
          <span
            style={{
              fontSize: '1.5rem',
              lineHeight: 1.5,
              marginBottom: '0.75rem',
              direction: 'rtl',
            }}
          >
            {node.nodeValue}
          </span>
        );
      },
    },
    {
      shouldProcessNode(node) {
        return node.type && node.type === 'text';
      },
      processNode(node) {
        if (!node.parent || node.parent.tagName === 'div' || node.parent.tagName === 'font') {
          const isFarsi = _.get(lngDetector.detect(node.nodeValue), '0.0', 'farsi') === 'farsi';
          return (
            <span
              dir={isFarsi ? 'rtl' : 'ltr'}
              // dir="rtl"
              style={{
                fontSize: '1.5rem',
                lineHeight: 1.5,
                marginBottom: '0.75rem',
              }}
            >
              {node.nodeValue}
            </span>
          );
        }
        return <>{node.nodeValue}</>;
      },
    },
  ],
});
