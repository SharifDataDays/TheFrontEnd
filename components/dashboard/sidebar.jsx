import React from 'react';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';

function VerticalSidebar() {
  return (
    <Sidebar as={Menu} direction="left" icon="labeled" inverted vertical visible>
      <Menu.Item as="a">
        <Icon name="home" />
        Home
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="gamepad" />
        Games
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="camera" />
        Channels
      </Menu.Item>
    </Sidebar>
  );
}

export default VerticalSidebar;
