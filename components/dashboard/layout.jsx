import React from 'react';
import Navbar from '~/components/global/navbar/auth';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default Layout;
