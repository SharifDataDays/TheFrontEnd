import React, { Component } from 'react';
import { Box, Flex, Heading, Link, Button, Text } from 'rebass';
import LoginBox from './loginBox';
import neuralnet from './neuralnet';

export default class LoginContainer extends Component {
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
      <Flex
        sx={{
          width: '80%',
          height: '90%',
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
    );
  }
}
