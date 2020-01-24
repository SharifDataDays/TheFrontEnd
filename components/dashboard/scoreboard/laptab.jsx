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

const GenerateMyRow = ({ team }) => {
  const color = '#00000066';
  const border = `3px solid ${color}`;
  return (
    <Table.Row warning>
      <Table.Cell textAlign="center" style={{ marginLeft: '3rem !important' }}>
        {team.total_score}
      </Table.Cell>

      {team.scores.map((score) => {
        return <TableCell textAlign="center">{score}</TableCell>;
      })}

      <Table.Cell textAlign="center" border={border}>
        {team.name}
      </Table.Cell>
      <Table.Cell textAlign="center" border={border}>
        {team.rank}
      </Table.Cell>
    </Table.Row>
  );
};

const GenerateRows = ({ data, myName, teams }) => {
  const rows = teams.map((x) => {
    let background = '#f8f8fa';
    const rank = x.rank;
    if (rank <= 3) background = '#fed76673';
    else if (rank <= 6) background = '#bbbbbb73';
    else if (rank <= 9) background = '#cd7f3273';
    const borderRight = `3px solid ${background} !important`;
    if (x.name === myName) return <GenerateMyRow team={x} />;

    return (
      <Table.Row style={{ background }}>
        <Table.Cell textAlign="center" style={{ marginLeft: '3rem !important' }}>
          {x.total_score}
        </Table.Cell>

        {x.scores.map((score) => {
          return <TableCell textAlign="center">{score}</TableCell>;
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


const onChange = (e, pageInfo) => {
  console.log("event:", e)
  console.log("oageInfo:", pageInfo)
  console.log("active page:", pageInfo.activePage)
}

const Footer = (props) => {
  const numberOfTeams = props.teams.length;
  const pageNumbers = numberOfTeams / 2;

  return (
    <>
      <Info>رتبه‌های 1 الی 2</Info>
      <Table.Row>
        <Table.Row>
          <Pagination
            defaultActivePage={1}
            firstItem={null}
            lastItem={null}
            secondary
            defaultActivePage={pageNumbers / 2}
            totalPages={pageNumbers}
            style={{ marginTop: '0.5rem' }}
            onPageChange={onChange}
          />
        </Table.Row>
      </Table.Row>
    </>
  );
};

const Scoreboard = ({ data, milestone, teams, tasks }) => {
  const myName = 'team1';
  // const display = teams.some((x) => x.name === myName) ? 'none' : '';
  return (
    <>
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
          {/* <GenerateMyRow name={myName} teams={teams} display={display} /> */}
          <GenerateRows data={data} myName={myName} teams={teams} />
        </Table.Body>
      </Table>
      <Footer teams={teams} />
    </>
  );
};

export default Scoreboard;
