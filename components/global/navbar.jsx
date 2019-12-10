import styled from 'styled-components';
import React, { Component } from 'react';
import { Button, Dropdown, Menu } from 'semantic-ui-react';

const Navbar = styled(Menu)`
  margin: 0 !important;
  border-radius: 0 !important;
  border: 0 !important;
  border-bottom: 1px solid #e2e2e2 !important;
`;

export default class MenuExampleSizeTiny extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Navbar size="large" pointing secondary>
        <Menu.Item name="LOGO" active={activeItem === 'LOGO'} onClick={this.handleItemClick} />
        <Menu.Item name="Blog" active={activeItem === 'Blog'} onClick={this.handleItemClick} />
        <Menu.Item
          name="Resources"
          active={activeItem === 'Resources'}
          onClick={this.handleItemClick}
        />

        <Menu.Menu position="right">
          <Dropdown item text="Language">
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Navbar>
    );
  }
}
