import React from 'react';
import { Grid, Menu, Table } from 'semantic-ui-react';
import styled from 'styled-components';

const TableHeader = styled(Table.HeaderCell)`
  background: rgba(80, 87, 99, 0.75) !important;
  border-radius: 0 !important;
  color: black !important;
`;

const TableExampleColumnWidth = () => (
  <Grid centered>
    <Grid.Column computer={11}>
      <Table selectable size="small">
        <Table.Header>
          <Table.Row style={{ height: '5rem !important' }}>
            <TableHeader>امتیاز</TableHeader>
            <TableHeader>نام</TableHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>John</Table.Cell>
            <Table.Cell>Approved</Table.Cell>
          </Table.Row>
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon></Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon></Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Grid.Column>
  </Grid>
);

export default TableExampleColumnWidth;
