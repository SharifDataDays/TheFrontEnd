import React, { Component } from 'react';
import { Box, Flex, Heading, Link, Button, Text } from 'rebass';
import neuralnet from './neuralnet';
import theme from '../../theme';
import { ThemeProvider } from 'styled-components';
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
      <ThemeProvider theme={theme}>
        <Flex
          sx={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: 'white',
          }}
        >
          <Box width={[0, 45 / 100, 45 / 100]} sx={{ marginRight: 10 }}>
            <canvas
              ref="canvas"
              style={{
                width: '100%',
                height: '100%',
              }}
            ></canvas>
          </Box>
          <Box width={[1, 55 / 100, 55 / 100]} sx={{ marginX: 'auto', backgroundColor: 'white' }}>
            {this.props.children}
          </Box>
        </Flex>
      </ThemeProvider>
    );
  }
}
