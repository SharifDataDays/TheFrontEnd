import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import LoginSignupContainer from '../loginSignup/container';
import LoginFields from './loginFields';

export default class LoginContainer extends Component {
  render() {
    return (
      <LoginSignupContainer>
        <Header dividing as="h1">ورود</Header>
        <LoginFields />
      </LoginSignupContainer>
    );
  }
}
