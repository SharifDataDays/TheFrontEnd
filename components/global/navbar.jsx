import styled from 'styled-components';
import Link from 'next/link';
import React, { Component } from 'react';
import { Button, Menu as M, Image } from 'semantic-ui-react';

const Menu = styled(M)`
  margin: 0 !important;
  border-radius: 0 !important;
  border: 0 !important;
  border-bottom: 1px solid #e2e2e2 !important;
`;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: 'LOGO' };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    e.preventDefault();
    this.setState({
      activeItem: name,
    });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Menu size="huge" pointing secondary>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button primary>ورود</Button>
          </Menu.Item>
        </Menu.Menu>

        <Menu.Item active={activeItem === 'Resources'} onClick={this.handleItemClick}>
          <Link href="/resources">منابع</Link>
        </Menu.Item>
        <Menu.Item active={activeItem === 'Blog'} onClick={this.handleItemClick}>
          <Link href="/blog">بلاگ</Link>
        </Menu.Item>
        <Menu.Header style={{ marginRight: '1rem' }}>
          <Link href="/">
            <Image size="mini" src="/logo.png" />
          </Link>
        </Menu.Header>
      </Menu>
    );
  }
}

// export default withTranslation('navbar')(Navbar);
export default Navbar;
