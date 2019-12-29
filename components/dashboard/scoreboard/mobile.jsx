import React from 'react';
import { Table, Pagination, Menu } from 'semantic-ui-react';
import styled from 'styled-components';
import example from '~/public/static/locales/test-scoreboard/scoreboard.json';

const MyRow = styled(Menu)`
  border-bottom: 2px solid rgba(52, 136, 18, 0.25) !important;
`;

const GenerateRows = (props) => {
  const rows = props.data.map((x) => {
    let background = '#f8f8fa';
    const rank = x.third;
    if (rank <= 3) background = '#fed766';
    else if (rank <= 6) background = '#bbbbbb';
    else if (rank <= 9) background = '#cd7f32';
    const borderRight = `3px solid ${background}`;
    return (
      <Menu secondary pointing style={{ background }}>
        <Menu.Item position='right' name={x.second} />
        <Menu.Item name={x.first} />
        <Menu.Item name={x.third} />
      </Menu>
    );
  });
  return rows;
};

const Footer = () => (
  <Table.Row>
    <Table.Row>
      <Pagination
        defaultActivePage={1}
        firstItem={null}
        lastItem={null}
        pointing
        secondary
        totalPages={10}
      />
    </Table.Row>
  </Table.Row>
);

const Scoreboard = (props) => {
  return (
    <>
      <Menu
        fluid
        secondary
        pointing
        style={{
          borderTop: '2px solid rgba(34,36,38,.45)',
          borderBottom: '2px solid rgba(34,36,38,.45)',
        }}
      >
        <Menu.Item header position='right' name='امتیاز' />
        <Menu.Item header name='نام' />
        <Menu.Item header name='رتبه' />
      </Menu>
      <MyRow secondary >
        <Menu.Item position='right' name='80' />
        <Menu.Item name='پویا معینی' />
        <Menu.Item name='3' />
      </MyRow>
      <GenerateRows data={props.data} />
      <Menu secondary pointing>
        <Menu.Item position='right' name='10' />
        <Menu.Item name='مریم مریمی' />
        <Menu.Item name='20' />
      </Menu>
      <Footer />
    </>
  );
};

export default Scoreboard;
