import React, { Component } from 'react';
import { Box, Button, Text, Flex } from 'rebass';
import Link from '../loginSignup/link';
import { Label } from '@rebass/forms';
import Input from '../loginSignup/input';
import { IoLogoGoogle, IoLogoGithub } from 'react-icons/io';
export default class LoginBox extends Component {
  render() {
    return (
      <Box sx={{ flexDirection: 'column', display: 'flex', width: '75%', mx: 'auto' }}>
        <Input label="Email" type="email" />
        <Input label="Password" type="password" />
        <Link sx={{ marginY: 3 }} href=".">
          Forgot password?
        </Link>
        <Button sx={{ backgroundColor: '#95d1fc', color: '#051838', fontFamily: 'Arial' }}>
          Login
        </Button>
        <hr style={{ display: 'block', width: '100%', marginTop: 10 }} />
        <Box flexDirection="column" width="100%">
          <Button
            width="100%"
            bg="transparent"
            sx={{ border: '1px solid #95d1fc', outline: 'none' }}
          >
            <Text>
              Log in with Google
              <IoLogoGoogle style={{ marginLeft: 10 }} size={25} color="white" />
            </Text>
          </Button>
          <Button
            onClick={() => {
              console.log('here');
            }}
            width="100%"
            bg="transparent"
            marginY={1}
            sx={{ border: '1px solid #95d1fc', outline: 'none' }}
          >
            <Text>
              Log in with Github
              <IoLogoGithub style={{ marginLeft: 10 }} size={25} color="white" />
            </Text>
          </Button>
        </Box>
        <Text color="white" sx={{ marginY: 3, fontFamily: 'Arial' }}>
          Don't have an account?
          <Link sx={{ marginLeft: 2 }} href=".">
            Click here
          </Link>
        </Text>
      </Box>
    );
  }
}
