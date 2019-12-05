import React, { Component } from 'react';
import { Box, Flex, Heading, Link, Button, Text } from 'rebass';
import LoginBox from './loginBox';
import LoginSignupContainer from '../global/loginSignupContainer';

export default class LoginContainer extends Component {
  render() {
    return (
      <LoginSignupContainer>
        <Heading fontFamily="Arial" color="#051838" fontSize={6} marginTop={5} marginLeft={3}>
          Welcome!
        </Heading>
        <LoginBox />
      </LoginSignupContainer>
    );
  }
}
