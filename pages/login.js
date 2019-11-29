import React, { Component } from 'react';
import { Box, Flex, Heading, Link, Button, Text } from 'rebass';
import { Input, Label } from '@rebass/forms';
import neuralnet from '../components/login/neuralnet';
import LoginBox from '../components/login/loginBox';
import Head from 'next/head';

class LoginPage extends Component {
  componentDidMount() {
    this.renderCanvas();
  }

  componentDidUpdate() {
    this.renderCanvas();
  }

  renderCanvas = () => {
    neuralnet(this.refs.canvas);
  };

  render() {
    return (
      <div>
        <Head>
          <style>{'body {background-color : #95d1fc}'}</style>
        </Head>
        <Flex
          sx={{
            width: '80%',
            height: '80%',
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            margin: 'auto',
            boxShadow: '1px 2px 4px rgba(0, 0, 0, .5)',
            borderRadius: 20,
            backgroundColor: '#051838',
          }}
        >
          <Box width={3 / 5} sx={{ marginRight: 10 }}>
            <canvas
              ref="canvas"
              style={{
                width: '100%',
                height: '100%',
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
              }}
            ></canvas>
          </Box>
          <Box width={2 / 5} sx={{ margin: 'auto' }}>
            <Heading fontFamily="Arial" fontSize={6} color="white">
              Welcome!
            </Heading>
            <LoginBox />
          </Box>
        </Flex>
      </div>
    );
  }
}

export default LoginPage;
