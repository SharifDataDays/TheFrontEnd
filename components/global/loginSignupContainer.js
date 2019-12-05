import React, { Component } from 'react';
import { Box, Flex, Heading, Link, Button, Text } from 'rebass';
import neuralnet from './neuralnet';

export default class LoginSignUpContainer extends Component {
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
          width: '100%',
          height: '100%',
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundColor: '#051838',
        }}
      >
        <Box width={1 / 2} sx={{ marginRight: 10 }}>
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
        <Box width={1 / 2} sx={{ marginX: 'auto', backgroundColor: 'white' }}>
          {this.props.children}
        </Box>
      </Flex>
    );
  }
}
