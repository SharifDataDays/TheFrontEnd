import React from 'react';
import { Flex, Box } from 'rebass/styled-components';
import { ThemeProvider } from 'styled-components';
import Link from 'next/link';
import HoverTrigger, { CustomButton } from './button';
import theme from '~/theme';

function CustomLink({ href, text }) {
  return (
    <Link href={href}>
      <HoverTrigger color="primary" bg="background">
        <CustomButton color="text" bg="background">
          {text}
        </CustomButton>
      </HoverTrigger>
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
