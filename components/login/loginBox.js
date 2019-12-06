import React, { Component } from 'react';
import { Box, Link, Button, Text, Flex } from 'rebass';
import { Button as NavButton } from '../global/navbar/button';
import { Input, Label } from '@rebass/forms';
import { IoLogoGoogle, IoLogoGithub } from 'react-icons/io';
import { Button as LoginButton } from '../loginSignup/button';
import { LoginSignupButton } from '../loginSignup/button';
import { IconButton } from '../loginSignup/iconButton';

export default class LoginBox extends Component {
  render() {
    return (
      <Box sx={{ flexDirection: 'column', display: 'flex', width: '75%', mx: 'auto' }}>
        <Label style={{ marginTop: 20, fontFamily: 'Arial' }} color="white" htmlFor="email">
          Email
        </Label>
        <Input
          style={{ border: 'none', color: '#edf3f5', outline: 'none' }}
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email here!"
        />
        <Label style={{ marginTop: 20, fontFamily: 'Arial' }} color="white" htmlFor="password">
          Password
        </Label>
        <Input
          style={{ border: 'none', color: '#edf3f5', outline: 'none' }}
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password here!"
        />
        <Link
          color="#95d1fc"
          sx={{ marginY: 3, fontFamily: 'Arial', textDecoration: 'none' }}
          href="."
        >
          Forgot password?
        </Link>
        <LoginSignupButton text="Login" />
        <hr style={{ display: 'block', width: '100%', marginTop: 10 }} />
        <Box flexDirection="column" width="100%">
          <IconButton text="Log in with Google">
            <IoLogoGoogle style={{ marginLeft: 10 }} size={25} color="white" />
          </IconButton>
          <IconButton text="Log in with Github">
            <IoLogoGithub style={{ marginLeft: 10 }} size={25} color="white" />
          </IconButton>
        </Box>
        <Text color="white" sx={{ marginY: 3, fontFamily: 'Arial' }}>
          Don't have an account?
          <Link sx={{ marginLeft: 2, textDecoration: 'none' }} color="#95d1fc" href=".">
            Click here
          </Link>
        </Text>
      </Box>
    );
  }
}
