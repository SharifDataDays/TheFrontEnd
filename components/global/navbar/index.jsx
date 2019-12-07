// @flow
import React from 'react';
import type { Node } from 'react';
import { ThemeProvider } from 'styled-components';
import { FilledButton, EmptyButton } from '../buttons';
import Navbar from './navbar';
import NavLink from './link';
import theme from '~/theme';

function SiteNavbar(): Node {
  return (
    <ThemeProvider theme={theme}>
      <Navbar
        header={<h1>LOGO</h1>}
        start={
          <>
            <NavLink href="/blog">
              <EmptyButton text="blog" />
            </NavLink>
            <NavLink href="/resources">
              <EmptyButton text="resources" />
            </NavLink>
          </>
        }
        extras={
          <NavLink href="/login">
            <FilledButton text="login" />
          </NavLink>
        }
      />
    </ThemeProvider>
  );
}

export default SiteNavbar;
