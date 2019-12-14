import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import LoginSignupContainer from '../loginSignup/container';
import Fields from './fields';

export default class LoginContainer extends Component {
  render() {
    return (
      <LoginSignupContainer>
        <Header as="h1">Login</Header>
        <Fields />
      </LoginSignupContainer>
    );
  }
}
