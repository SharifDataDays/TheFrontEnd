import React from 'react';
import { Table, Pagination } from 'semantic-ui-react';
import styled from 'styled-components';
import example from '~/public/static/locales/test-scoreboard/scoreboard.json';

const TableHeader = styled(Table.HeaderCell)`
  background: rgba(80, 87, 99, 0.05) !important;
  border-radius: 0 !important;
  color: black !important;
`;

const GenerateMyRow = ({ name, score, rank }) => {
  const color = '#00000066';
  const border = `1px solid ${color}`;
  return (
    <Table.Row>
      <Table.Cell
        style={{
          borderTop: border,
          borderBottom: border,
          borderLeft: border,
        }}
        textAlign='right'
      >
        {score}
      </Table.Cell>
      <Table.Cell style={{ borderTop: border, borderBottom: border }}>{name}</Table.Cell>
      <Table.Cell
        style={{
          borderTop: border,
          borderBottom: border,
          borderRight: border,
        }}
        textAlign='center'
      >
        {rank}
      </Table.Cell>
    </Table.Row>
  );
};

const GenerateRows = () => {
  const rows = example.map((x) => {
    let background = '#f8f8fa';
    const rank = x.third;
    if (rank <= 3) background = '#fed76673';
    else if (rank <= 6) background = '#bbbbbb73';
    else if (rank <= 9) background = '#cd7f3273';
    const borderRight = `3px solid ${background} !important`;
    return (
      <Table.Row style={{ background }}>
        <Table.Cell textAlign='right' style={{ marginLeft: '3rem !important' }}>
          {x.second}
        </Table.Cell>
        <Table.Cell>{x.first}</Table.Cell>
        <Table.Cell textAlign='center' style={{ borderRight }}>
          {x.third}
        </Table.Cell>
      </Table.Row>
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

const Scoreboard = () => {
  return (
    <Table selectable size='small' style={{ border: '0 !important' }}>
      <Table.Header>
        <Table.Row style={{ height: '4rem !important' }} verticalAlign='bottom'>
          <TableHeader textAlign='right' width={6}>
            امتیاز
          </TableHeader>
          <TableHeader width={3}>نام</TableHeader>
          <TableHeader width={1} textAlign='center'>
            رتبه
          </TableHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <GenerateMyRow name='پویا معینی' score='100' rank='0' />
        <GenerateRows />
      </Table.Body>
      <Footer />
    </Table>
  );
};

export default Scoreboard;
