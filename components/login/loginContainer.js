import React, { Component } from 'react';
import { Box, Flex, Heading, Link, Button, Text } from 'rebass';
import LoginBox from './loginBox';
import LoginSignupContainer from '../global/loginSignupContainer';

export default class LoginContainer extends Component {
  render() {
    return (
      <LoginSignupContainer>
        <Heading fontFamily="Arial" fontSize={6} color="white">
          Welcome!
        </Heading>
        <LoginBox />
      </LoginSignupContainer>
    );
  }
}
