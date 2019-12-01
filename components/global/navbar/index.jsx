import React from 'react';
import { ThemeProvider } from 'styled-components';
import Navbar from './navbar';
import NavLink from './link';
import { NavbarButton, LoginButton } from './buttons';
import theme from '~/theme';

function SiteNavbar() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar
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

export default SiteNavbar;
