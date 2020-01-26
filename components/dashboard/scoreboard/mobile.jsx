import React from 'react';
import { Table, Pagination, Menu } from 'semantic-ui-react';
import styled from 'styled-components';

const MyRow = styled(Menu)`
  border-bottom: 2px solid rgba(52, 136, 18, 0.25) !important;
`;

const MenuScoreBoard = styled(Menu)`
  border-top: 2px solid rgba(34, 36, 38, 0.45);
  border-bottom: 2px solid rgba(34, 36, 38, 0.45);
`;

const GenerateMyRow = ({ name, score, rank, display }) => (
  <MyRow secondary style={{ display }}>
    <Menu.Item position="right" name={score} />
    <Menu.Item name={name} />
    <Menu.Item name={rank} />
  </MyRow>
);

const GenerateRows = (props) => {
  const rows = props.data.map((x) => {
    let background = '';
    const rank = x.third;
    if (rank <= 3) background = '#fed76673';
    else if (rank <= 6) background = '#bbbbbb73';
    else if (rank <= 9) background = '#cd7f3273';
    if (x.first === props.myName)
      return <GenerateMyRow name={x.first} score={x.second} rank={x.third} />;
    return (
      <Menu secondary pointing style={{ background }}>
        <Menu.Item position="right" name={x.second} />
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

const Scoreboard = ({ data }) => {
  const myName = 'پویا معینی';
  const display = data.some((x) => x.first === myName) ? 'none' : '';
  return (
    <>
      <MenuScoreBoard fluid secondary pointing>
        <Menu.Item header position="right" name="امتیاز" />
        <Menu.Item name="task1" />
        <Menu.Item header name="نام" />
        <Menu.Item header name="رتبه" />
      </MenuScoreBoard>
      {/* <GenerateMyRow name={myName} score='100' rank='12' display={display} /> */}
      <GenerateRows data={data} myName={myName} />
      <Footer />

      {/* <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>score</Table.HeaderCell>
            <Table.HeaderCell>task</Table.HeaderCell>
            <Table.HeaderCell>name</Table.HeaderCell>
            <Table.HeaderCell>rank</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

      </Table> */}
    </>
  );
};

export default Scoreboard;
