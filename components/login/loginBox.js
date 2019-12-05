import React, { Component } from 'react';
import { Box, Button, Text, Flex } from 'rebass';
import Link from '../loginSignup/link';
import { Label } from '@rebass/forms';
import Input from '../loginSignup/input';
import { IoLogoGoogle, IoLogoGithub } from 'react-icons/io';
export default class LoginBox extends Component {
  render() {
    return (
      <Box sx={{ flexDirection: 'column', display: 'flex', width: '60%', mx: 'auto' }}>
        <Input label="Email" type="email" />
        <Input label="Password" type="password" />
        <Link sx={{ marginY: 3 }} href=".">
          Forgot password?
        </Link>
        <Button
          sx={{
            backgroundColor: '#95d1fc',
            color: '#051838',
            fontFamily: 'Arial',
            fontWeight: 'bold',
          }}
        >
          Login
        </Button>
        <hr style={{ display: 'block', width: '100%', marginTop: 10 }} />
        <Flex flexDirection="row" width="100%">
          <Button
            width={1 / 2}
            bg="transparent"
            sx={{ border: '1px solid #95d1fc', outline: 'none' }}
          >
            <Text fontSize="14px" fontWeight="bold" color="#051838">
              Log in with Google
              <IoLogoGoogle style={{ marginLeft: 10 }} size={20} color="#051838" />
            </Text>
          </Button>
          <Button
            width={1 / 2}
            bg="transparent"
            sx={{ border: '1px solid #95d1fc', outline: 'none' }}
          >
            <Text fontSize="14px" fontWeight="bold" color="#051838">
              Log in with Github
              <IoLogoGithub style={{ marginLeft: 10 }} size={20} color="#051838" />
            </Text>
          </Button>
        </Flex>
        <Text color="#051838" sx={{ marginY: 3, fontFamily: 'Arial' }}>
          Don't have an account?
          <Link sx={{ marginLeft: 2 }} href=".">
            Click here
          </Link>
        </Text>
      </Box>
    );
  }
}
