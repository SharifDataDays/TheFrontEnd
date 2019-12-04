import _ from 'lodash';
import React from 'react';
import { Flex, Box } from 'rebass/styled-components';
import { ThemeProvider } from 'styled-components';
import NextLink from 'next/link';
import { NavbarButton, LoginButton } from './button';
import theme from '~/theme';

const list = {
  blog: {
    href: 'blog',
    text: 'blog',
    side: 'start',
    order: 1,
    component: NavbarButton,
  },
  tutorial: {
    href: 'tutorial',
    text: 'tutorial',
    side: 'start',
    order: 2,
    component: NavbarButton,
  },
  login: {
    href: 'login',
    text: 'login',
    side: 'end',
    order: 1,
    component: LoginButton,
  },
};

function Link({ href, text, Component }) {
  return (
    <NextLink href={href}>
      <Component text={text} />
    </NextLink>
  );
}

function Side({ list, side }) {
  return (
    <>
      {_.map(
        _.filter(list, (item) => item.side === side),
        (item) => {
          return <Link href={item.href} text={item.text} Component={item.component} />;
        },
      )}
    </>
  );
}

function Navbar() {
  return (
    <ThemeProvider theme={theme}>
      <Flex alignItems="center" px={6} py={4} bg="black" boxShadow={1}>
        <Side list={list} side="left" />
        <Box mx="auto" />
        <Side list={list} side="right" />
      </Flex>
    </ThemeProvider>
  );
}

export default Navbar;
