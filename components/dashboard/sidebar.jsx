import React from 'react';
import { Menu, Sidebar } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCog } from '@fortawesome/free-solid-svg-icons';

function VerticalSidebar() {
  return (
    <Sidebar
      style={{ width: '10%' }}
      as={Menu}
      direction="left"
      icon="labeled"
      inverted
      vertical
      visible
    >
      <Menu.Item as="a" href="/dashboard/trials">
        <FontAwesomeIcon size="lg" icon={faBook} style={{ marginBottom: '0.5rem' }} />
        <br />
        منابع
      </Menu.Item>
      <Menu.Item as="a" href="/dashboard/trials">
        <FontAwesomeIcon size="lg" icon={faCog} style={{ marginBottom: '0.5rem' }} />
        <br />
        حساب کاربری
      </Menu.Item>
    </Sidebar>
  );
}

export default VerticalSidebar;
