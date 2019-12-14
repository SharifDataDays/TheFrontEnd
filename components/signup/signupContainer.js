import React, { Component } from 'react';
import { Heading } from 'rebass';
import LoginSignupContainer from '../loginSignup/container';
import SignupBox from './signupBox';

export default class LoginContainer extends Component {
  render() {
    return (
      <LoginSignupContainer>
        <Heading fontFamily="Arial" fontSize={6} color="white">
          Welcome!
        </Heading>
        <SignupBox />
      </LoginSignupContainer>
    );
  }
}
