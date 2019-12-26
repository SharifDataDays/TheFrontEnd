import React from 'react';
import { Segment } from 'semantic-ui-react';
import Sidebar from './sidebar';

function Layout({ children }) {
  return (
    <>
      <Sidebar />
      <Segment basic>{children}</Segment>
    </>
  );
}

export default Layout;
