import React, { Component } from 'react';
import { Box, Button, Text, Flex } from 'rebass';
import Link from '../loginSignup/link';
import Input from '../loginSignup/input';
import { GoogleLoginButton, GithubLoginButton } from 'react-social-login-buttons';
import { LoginSignupButton } from '../loginSignup/button';

export default class LoginBox extends Component {
  render() {
    return (
      <Box sx={{ flexDirection: 'column', display: 'flex', width: '60%', mx: 'auto' }}>
        <Input label="Email" type="email" />
        <Input label="Password" type="password" />
        <Link sx={{ marginY: 3 }} href=".">
          Forgot password?
        </Link>
        <LoginSignupButton text="Login" />
        <hr style={{ display: 'block', width: '100%', marginTop: 10 }} />
        <Flex flexDirection="row" width="100%" justifyContent="space-between">
          <GoogleLoginButton style={{ width: '48%', fontSize: '16px', outline: 'none' }} />
          <GithubLoginButton style={{ width: '48%', fontSize: '16px', outline: 'none' }} />
        </Flex>
        <Text sx={{ marginY: 3, fontFamily: 'Arial' }}>
          Don't have an account?
          <Link sx={{ marginLeft: 2 }} href=".">
            Click here
          </Link>
        </Text>
      </Box>
    );
  }
}
