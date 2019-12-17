import React, { Component } from 'react';
import { Header, Container } from 'semantic-ui-react';
import LoginSignupContainer from '../loginSignup/container';
import SignUpFields from './signUpFields'

export default class SignupContainer extends Component {
  render() {
    return (
      <LoginSignupContainer>
        <Header size="huge" dividing>ثبت نام</Header>
        <SignUpFields />
      </LoginSignupContainer>
    );
  }
}
