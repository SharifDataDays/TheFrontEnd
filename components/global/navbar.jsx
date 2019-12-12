import styled from 'styled-components';
import React, { Component } from 'react';
import { Button, Dropdown, Menu as M } from 'semantic-ui-react';
import { i18n, withTranslation } from '~/i18n';

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
    const { t } = this.props;
    const { activeItem } = this.state;

    i18n.changeLanguage('fa');

    return (
      <Menu size="large" pointing secondary>
        <Menu.Item name="LOGO" active={activeItem === 'LOGO'} onClick={this.handleItemClick} />
        <Menu.Item name={t('blog')} active={activeItem === 'blog'} onClick={this.handleItemClick} />
        <Menu.Item
          name={t('resources')}
          active={activeItem === 'resources'}
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
      </Menu>
    );
  }
}

export default withTranslation('navbar')(Navbar);
