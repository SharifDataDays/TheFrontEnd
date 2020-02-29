import _ from 'lodash';
import styled from 'styled-components';
import { space, color, border } from 'styled-system';
import { Menu, Container as C, Responsive } from 'semantic-ui-react';
import React, { useState } from 'react';
import Team from './team';
import { Component } from 'react';

const Container = styled(C)`
  ${space}
  ${color}
  ${border}

`;

export default class Staff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0,
    };
    this.handleItemClick.bind(this);
  }

  handleItemClick = (e, { ind }) =>
    this.setState({
      activeItem: ind,
    });

  render() {
    const { staffs } = this.props;

    return (
      <Container
        px={[2, 4, 6]}
        pt={6}
        pb={5}
        style={{
          backgroundImage:
            'linear-gradient(to bottom, #101010, #141414, #171717, #1a1a1a, #202020)',
          // paddingTop: '90px',

          minHeight: 'calc(100vh - 333px)',
        }}
        fluid
      >
        <Menu pointing secondary dir="RTL" inverted size="large" widths={staffs.length}>
          {_.map(staffs, (team, ind) => {
            return (
              <Menu.Item
                name={team.title_fa}
                ind={ind}
                active={this.state.activeItem === ind}
                onClick={this.handleItemClick}
              >
                <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
                  <p
                    style={{
                      whiteSpace: 'nowrap',
                      transform: 'rotate(-90deg)',
                      paddingLeft: '55px',
                    }}
                  >
                    {team.title_fa}
                  </p>
                </Responsive>

                <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                  <p>{team.title_fa}</p>
                </Responsive>
              </Menu.Item>
            );
          })}
        </Menu>
        <Container>
          <Team team={staffs[this.state.activeItem]}></Team>
        </Container>
      </Container>
    );
  }
}
