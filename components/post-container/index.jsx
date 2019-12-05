import React, { Component } from 'react';
import { Image, Flex } from 'rebass/styled-components';
import { ThemeProvider } from 'styled-components';
import Container from './container';
import theme from '~/theme';

function Posts(props) {
  return (
    <ThemeProvider theme={theme}>
      <Container />
    </ThemeProvider>
  );
}

export default Posts;
