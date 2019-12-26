import React from 'react';
import { Table, Image, Header, List, Divider } from 'semantic-ui-react';
import htmlParser from 'react-markdown/plugins/html-parser';

export default htmlParser({
  isValidNode: (node) => true,
  processingInstructions: [
    {
      shouldProcessNode(node) {
        return node.name && node.name === 'div';
      },
      processNode(node, children) {
        return (
          <div style={{ marginBottom: '3rem' }} dir="RTL">
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
        return node.name && node.name === 'h1';
      },
      processNode(node) {
        return (
          <Header as="h1" style={{ fontSize: '3rem', lineHeight: 1.5, marginBottom: '3rem' }}>
            {node.children[0].data.toUpperCase()}
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
          <Header as="h2" style={{ fontSize: '2.25rem', lineHeight: 1.5, marginBottom: '3rem' }}>
            {node.children[0].data.toUpperCase()}
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
          <Header as="h3" style={{ fontSize: '3rem', lineHeight: 1.5, marginBottom: '1rem' }}>
            {node.children[0].data.toUpperCase()}
          </Header>
        );
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
          <Table style={{ marginBottom: '3rem' }} celled striped>
            {children}
          </Table>
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
          <div style={{ margin: '2rem' }} dir="RTL">
            <List bulleted>{children}</List>
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
            <List ordered>{children}</List>
          </div>
        );
      },
    },
    {
      shouldProcessNode(node) {
        return node.name && node.name === 'li';
      },
      processNode(node, children) {
        return <List.Item>{children}</List.Item>;
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
        return <code style={{ backgroundColor: '#eeeeee' }}>{children}</code>;
      },
    },
    {
      shouldProcessNode(node) {
        return node.type && node.type === 'text';
      },
      processNode(node) {
        const getStyle = (parent) => {
          if (!parent || parent.tagName === 'div' || parent.tagName === 'font') {
            return {
              fontSize: '1.5rem',
              lineHeight: 1.5,
              marginBottom: '0.75rem',
              direction: 'rtl',
            };
          }
          return {};
        };
        if (!node.parent) {
          return <p style={getStyle(node.parent)}>{node.nodeValue}</p>;
        }
        return <>{node.nodeValue}</>;
      },
    },
  ],
});
