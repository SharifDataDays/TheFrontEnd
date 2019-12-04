import React, { Component } from 'react';
import {Heading} from 'rebass';
import SignupBox from './signupBox';
import LoginSignupContainer from '../global/loginSignupContainer';

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
