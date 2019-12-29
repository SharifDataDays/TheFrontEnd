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
    if (rank <= 3) background = '#fed766';
    else if (rank <= 6) background = '#bbbbbb';
    else if (rank <= 9) background = '#cd7f32';
    const borderRight = `3px solid ${background}`;
    return (
      <Table.Row style={{ background }}>
        <Table.Cell>{x.second}</Table.Cell>
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
      <Table.Header fullWidth>
        <Table.Row >
          <Table.HeaderCell width={2}>Header</Table.HeaderCell>
          <Table.HeaderCell width={2}>Header</Table.HeaderCell>
          <Table.HeaderCell width={1}>Header</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
      </Table.Body>
      <Footer />
    </Table>
  );
};

export default Scoreboard;
