import React from 'react';
import { Flex, Box } from 'rebass/styled-components';
import { ThemeProvider } from 'styled-components';
import NextLink from 'next/link';
import { NavbarButton, LoginButton } from './button';
import theme from '~/theme';

function Link({ href, text, Component }) {
  return (
    <NextLink href={href}>
      <Component text={text} />
    </NextLink>
  );
}

function Navbar() {
  return (
    <ThemeProvider theme={theme}>
      <Box borderBottom="1px solid" borderColor="primary">
        <Flex alignItems="center" px={6} py={4} bg="background">
          <Link href="blog" text="blog" Component={NavbarButton} />
          <Link href="resources" text="resources" Component={NavbarButton} />
          <Box mx="auto" />
          <Link href="login" text="login" Component={LoginButton} />
        </Flex>
      </Box>
    </ThemeProvider>
  );
}

export default Navbar;
