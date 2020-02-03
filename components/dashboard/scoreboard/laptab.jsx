import React, { Component } from 'react';
import { Table, Pagination, Segment, TableRow, Tab, Header, Menu, Icon } from 'semantic-ui-react';
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


const GenerateRows = ({ myName, teams, topRank }) => {
  let firstRank = topRank - 1;
  let endRank = topRank + 19;
  let numberOfTeams = teams.length;
  if (endRank > numberOfTeams) {
    endRank = numberOfTeams;
  }

  let newTeams = teams.slice(firstRank, endRank);

  const rows = newTeams.map((x) => {
    let background = '#f8f8fa';
    let fontWeight = 'normal';
    const rank = x.rank;
    if (rank <= 3) background = '#fed76673';
    else if (rank <= 6) background = '#bbbbbb73';
    else if (rank <= 9) background = '#cd7f3273';

    let borderTop = `none`;
    let borderBottom = `none`;

    if (x.name === myName) {
      background = '#fff8eb';
      fontWeight = 'bold';
      borderTop = `2px solid #858585`;
      borderBottom = `2px solid #858585`;
    }

    const borderRight = `3px solid ${background} !important`;

    return (
      <Table.Row style={{ background, fontWeight }}>
        <Table.Cell textAlign="center" style={{ borderTop, borderBottom }}>
          {x.total_score}
        </Table.Cell>
        {x.scores.map((score) => {
          return (
            <TableCell textAlign="center" style={{ borderTop, borderBottom }}>
              {score}
            </TableCell>
          );
        })}
        <Table.Cell textAlign="center" style={{ borderTop, borderBottom }}>
          {x.name}
        </Table.Cell>
        <Table.Cell textAlign="center" style={{ borderTop, borderBottom, borderRight }}>
          {x.rank}
        </Table.Cell>
      </Table.Row>
    );
  });
  return rows;
};

const Footer = (props) => {
  const numberOfTeams = props.teams.length;
  const pageNumbers = Math.ceil(numberOfTeams / 20);

  let endRank = props.topRank + 19;
  if (endRank > numberOfTeams) {
    endRank = numberOfTeams;
  }

  return (
    <>
      <Info
        style={{
          textAlign: 'center',
          margin: '5px',
          padding: 0,
        }}
      >
        {' '}
        {endRank} رتبه‌های {props.topRank} الی
      </Info>

      <Table.Row
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: '20px',
        }}
      >
        <Pagination
          defaultActivePage={1}
          firstItem={null}
          lastItem={null}
          secondary
          // defaultActivePage={pageNumbers}
          totalPages={pageNumbers}
          onPageChange={props.changePage}
        />
      </Table.Row>
    </>
  );
};

function onPageChange(e, pageInfo) {
  let newTopRank = (pageInfo.activePage - 1) * 20 + 1;
  this.setState({ topRank: newTopRank });
}

class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      milestone: props.milestone,
      teams: props.teams,
      tasks: props.tasks,
      myName: 'team13',
      topRank: 1,
    };
    this.changePage = onPageChange.bind(this);
  }

  componentDidMount() {
    

  }

  render() {
    return (
      <div style={{ overflow: 'auto' }}>
        <Table celled unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="center">امتیاز</Table.HeaderCell>
              {this.state.tasks.map((x) => {
                return <Table.HeaderCell textAlign="center">{x.name}</Table.HeaderCell>;
              })}
              <Table.HeaderCell textAlign="center">نام</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">رتبه</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <GenerateRows
              myName={this.state.myName}
              teams={this.state.teams}
              topRank={this.state.topRank}
            />
          </Table.Body>
        </Table>

        <Footer
          teams={this.state.teams}
          changePage={this.changePage}
          topRank={this.state.topRank}
        />
      </div>
    );
  }
}

export default Scoreboard;
