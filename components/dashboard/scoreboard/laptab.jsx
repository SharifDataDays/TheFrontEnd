import React from 'react';
import { Table, Pagination, Segment, TableRow, Tab, Header, Menu, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import { width } from 'dom-helpers';

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
      <TableCell textAlign="right" border={border}>
        {score}
      </TableCell>
      <TableCell border={border}>{name}</TableCell>
      <TableCell border={border} textAlign="center">
        {rank}
      </TableCell>
    </Table.Row>
  );
};

const GenerateRows = ({ data, myName, teams }) => {
  const rows = teams.map((x) => {
    let scoresSum = 0;
    x.scores.map((score) => {
      scoresSum = scoresSum + score
    })


    let background = '#f8f8fa';
    const rank = x.rank;
    if (rank <= 3) background = '#fed76673';
    else if (rank <= 6) background = '#bbbbbb73';
    else if (rank <= 9) background = '#cd7f3273';
    const borderRight = `3px solid ${background} !important`;
    if (x.name === myName) return <GenerateMyRow name={x.name} score="10" rank={x.rank} />;

    return (
      <Table.Row style={{ background }}>
        <Table.Cell textAlign="right" style={{ marginLeft: '3rem !important' }}>
          {scoresSum}
        </Table.Cell>

        {x.scores.map((score) => {
          return (
            <TableCell textAlign="center">
              {score}
              {/* score */}
            </TableCell>
          );
        })}

        <Table.Cell textAlign="center">{x.name}</Table.Cell>
        <Table.Cell textAlign="center" style={{ borderRight }}>
          {x.rank}
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

const Scoreboard = ({ data, milestone, teams, tasks }) => {
  const myName = 'پویا معینی';
  const display = data.some((x) => x.first === myName) ? 'none' : '';
  return (
    <>
      {/* <Table selectable size="small" style={{ border: '0 !important' }}>
        <Table.Header>
          <Table.Row style={{ height: '4rem !important' }}>
            <TableHeader textAlign="right">امتیاز</TableHeader>
            {tasks.map((x) => {
              return <TableHeader textAlign="center">{x.name}</TableHeader>;
            })}
            <TableHeader textAlign="center">نام</TableHeader>
            <TableHeader textAlign="center">رتبه</TableHeader>
          </Table.Row>
        </Table.Header>
      </Table>
      <Table>
        <Table.Body>
          <GenerateMyRow name={myName} score="100" rank="0" display={display} />
          <GenerateRows data={data} myName={myName} teams={teams} />
        </Table.Body>
      </Table>
      <Footer /> */}

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="center">امتیاز</Table.HeaderCell>
            {tasks.map((x) => {
              return <Table.HeaderCell textAlign="center">{x.name}</Table.HeaderCell>;
            })}
            <Table.HeaderCell textAlign="center">نام</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">رتبه</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <GenerateMyRow name={myName} score="100" rank="0" display={display} />
          <GenerateRows data={data} myName={myName} teams={teams} />
        </Table.Body>
      </Table>
      <Footer />

    </>
  );
};

export default Scoreboard;
