import React from 'react';
import { ThemeProvider } from 'styled-components';
import LargeNavbar from './navbar';
import NavLink from './link';
import { NavbarButton, LoginButton } from './buttons';
import theme from '~/theme';

function Navbar() {
  return (
    <ThemeProvider theme={theme}>
      <LargeNavbar
        header={<h1>LOGO</h1>}
        start={
          <>
            <NavLink href="/blog">
              <NavbarButton text="blog" />
            </NavLink>
            <NavLink href="/resources">
              <NavbarButton text="resources" />
            </NavLink>
          </>
        }
        end={
          <>
            <NavLink href="/blog">
              <NavbarButton text="blog" />
            </NavLink>
            <NavLink href="/resources">
              <NavbarButton text="resources" />
            </NavLink>
          </>
        }
        extras={
          <NavLink href="/login">
            <LoginButton text="login" />
          </NavLink>
        }
      />
    </ThemeProvider>
  );
}

export default Navbar;
