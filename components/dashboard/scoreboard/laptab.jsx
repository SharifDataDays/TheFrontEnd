import React from 'react';
import { Table, Pagination, Segment } from 'semantic-ui-react';
import styled from 'styled-components';

const TableHeader = styled(Table.HeaderCell)`
  background: rgba(80, 87, 99, 0.05) !important;
  border-radius: 0 !important;
  color: black !important;
`;

const TableCell = styled(Table.Cell)`
  border-top: ${(props) => props.border} !important;
  border-bottom: ${(props) => props.border} !important;
`;

const Info = styled.p`
  text-align: left;
  margin-top: 1rem;
  margin-left: 1rem;
`;

const GenerateMyRow = ({ name, score, rank, display }) => {
  const color = '#00000066';
  const border = `1px solid ${color}`;
  return (
    <Table.Row style={{ display }}>
      <TableCell textAlign='right' border={border}>
        {score}
      </TableCell>
      <TableCell border={border}>{name}</TableCell>
      <TableCell border={border} textAlign='center'>
        {rank}
      </TableCell>
    </Table.Row>
  );
};

const GenerateRows = ({ data, myName }) => {
  const rows = data.map((x) => {
    let background = '#f8f8fa';
    const rank = x.third;
    if (rank <= 3) background = '#fed76673';
    else if (rank <= 6) background = '#bbbbbb73';
    else if (rank <= 9) background = '#cd7f3273';
    const borderRight = `3px solid ${background} !important`;
    if (x.first === myName) return <GenerateMyRow name={x.first} score={x.second} rank={x.third} />;

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
  <>
    <Info>رتبه‌های 1 الی 20</Info>
    <Table.Row>
      <Table.Row>
        <Pagination
          defaultActivePage={1}
          firstItem={null}
          lastItem={null}
          secondary
          totalPages={10}
          style={{ marginTop: '0.5rem' }}
        />
      </Table.Row>
    </Table.Row>
  </>
);

const Scoreboard = ({ data }) => {
  const myName = 'پویا معینی';
  const display = data.some((x) => x.first === myName) ? 'none' : '';
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
        <GenerateMyRow name={myName} score='100' rank='0' display={display} />
        <GenerateRows data={data} myName={myName} />
      </Table.Body>
      <Footer />
    </Table>
  );
};

export default Scoreboard;
