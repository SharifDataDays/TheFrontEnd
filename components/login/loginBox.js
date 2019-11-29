import React, { Component } from 'react';
import { Box, Link, Button, Text } from 'rebass';
import { Input, Label } from '@rebass/forms';
import Head from 'next/head';

export default class LoginBox extends Component {
  render() {
    return (
      <Box sx={{ flexDirection: 'column', display: 'flex', width: '75%', mx: 'auto' }}>
        <Label style={{ marginTop: 20, fontFamily: 'Arial' }} color="white" htmlFor="email">
          Email
        </Label>
        <Input
          style={{ border: 'none' }}
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email here!"
        />
        <Label style={{ marginTop: 20, fontFamily: 'Arial' }} color="white" htmlFor="password">
          Password
        </Label>
        <Input
          style={{ border: 'none' }}
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
        <Button sx={{ backgroundColor: '#95d1fc', color: '#051838', fontFamily: 'Arial' }}>
          Login
        </Button>
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
