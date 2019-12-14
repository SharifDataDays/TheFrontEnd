import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import neuralnet from './neuralnet';

export default class LoginSignupContainer extends Component {
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
    const { children } = this.props;
    return (
      <Grid
        centered
        style={{
          padding: 0,
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
        <Grid.Column width={8}>
          <canvas
            ref="canvas"
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </Grid.Column>
        <Grid.Column width={8}>{children}</Grid.Column>
      </Grid>
    );
  }
}
