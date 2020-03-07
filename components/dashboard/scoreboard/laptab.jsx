import React, { Component } from 'react';
import { Table, Pagination, Segment, TableRow, Tab, Header, Menu, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import persianJs from 'persianjs';
import _ from 'lodash';

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

const page_length = 15;

const numberFarsi = (number) => {
  if (_.isUndefined(number) || _.isNull(number)) return;

  if (_.ceil(number) === 0) number = 0;
  return persianJs(number.toString())
    .englishNumber()
    .toString();
};

const GenerateRows = ({ myName, teams, topRank }) => {
  let firstRank = topRank - 1;
  let endRank = topRank + page_length - 1;
  let numberOfTeams = teams.length;
  if (endRank > numberOfTeams) {
    endRank = numberOfTeams;
  }

  let newTeams = teams.slice(firstRank, endRank);

  const rows = newTeams.map((x) => {
    let background = '#f8f8fa';
    let fontWeight = 'normal';
    const rank = x.rank;
    if (rank <= 1) background = '#fed76673';
    else if (rank <= 2) background = '#bbbbbb73';
    else if (rank <= 3) background = '#cd7f3273';

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
          {numberFarsi(x.total_score)}
        </Table.Cell>
        {x.scores.map((score) => {
          return (
            <TableCell textAlign="center" style={{ borderTop, borderBottom }}>
              {numberFarsi(score)}
            </TableCell>
          );
        })}
        <Table.Cell textAlign="center" style={{ borderTop, borderBottom }}>
          {x.name}
        </Table.Cell>
        <Table.Cell textAlign="center" style={{ borderTop, borderBottom, borderRight }}>
          {numberFarsi(x.rank)}
        </Table.Cell>
      </Table.Row>
    );
  });
  return rows;
};

const Footer = (props) => {
  const numberOfTeams = props.teams.length;
  const pageNumbers = Math.ceil(numberOfTeams / page_length);

  const currentPage = (props.topRank - 1) / page_length + 1;
  let endRank = Math.min(props.topRank + page_length - 1, numberOfTeams);

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
        {numberFarsi(endRank)} رتبه‌های {numberFarsi(props.topRank)} الی
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
          defaultActivePage={currentPage}
          firstItem={null}
          lastItem={null}
          secondary
          totalPages={pageNumbers}
          onPageChange={props.changePage}
        />
      </Table.Row>
    </>
  );
};

function onPageChange(e, pageInfo) {
  let newTopRank = (pageInfo.activePage - 1) * page_length + 1;
  this.setState({ topRank: newTopRank });
}

class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      milestone: props.milestone,
      teams: props.teams,
      tasks: props.tasks,
      myteam: props.myteam,
      topRank: 1,
      // topRank: props.myteam.myPageTopRank,             // to show the page of current team uncomment this
      
    };
    this.changePage = onPageChange.bind(this);
  }

  render() {
    // console.log(this.props)
    // console.log(this.state)
    return (
      <>
        <div style={{ overflow: 'auto', marginBottom: '15px', direction: 'rtl' }}>
          <Table unstackable dir="LTR">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign="center">امتیاز کل</Table.HeaderCell>
                {this.state.tasks.map((x) => {
                  return <Table.HeaderCell textAlign="center">{x.name}</Table.HeaderCell>;
                })}
                <Table.HeaderCell textAlign="center" width={7}>نام</Table.HeaderCell>
                <Table.HeaderCell textAlign="center" width={2}>رتبه</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <GenerateRows
                myName={this.state.myteam.name}
                teams={this.state.teams}
                topRank={this.state.topRank}
              />
            </Table.Body>
          </Table>
        </div>
        <Footer
          teams={this.state.teams}
          changePage={this.changePage}
          topRank={this.state.topRank}
          currentPage={this.state.currentPage}
        />
      </>
    );
  }
}

export default Scoreboard;
