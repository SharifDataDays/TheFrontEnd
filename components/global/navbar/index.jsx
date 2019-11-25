import React from 'react';
import { Flex, Box, Button } from 'rebass/styled-components';
import { ThemeProvider } from 'styled-components';
import Link from 'next/link';
import NavbarButton from './navbarButton';
import theme from '~/theme';

function CustomLink({ href, text }) {
  return (
    <Link href={href}>
      <NavbarButton color="text" bg="background">
        {text}
      </NavbarButton>
    </Link>
  );
}

function Navbar() {
  return (
    <ThemeProvider theme={theme}>
      <Flex alignItems="center" px={6} py={4} bg="background" boxShadow={1}>
        <CustomLink href="test" text="test" />
        <Box mx="auto" />
        <CustomLink href="test" text="test" />
      </Flex>
    </ThemeProvider>
  );
}

export default Navbar;
