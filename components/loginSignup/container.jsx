import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import neuralnet from './neuralnet';

export default class LoginSignupContainer extends Component {
  componentDidMount() {
    if (window.innerWidth >= 768) {
      this.renderCanvas();
    }
  }

  componentDidUpdate() {
    if (window.innerWidth >= 768) {
      this.renderCanvas();
    }
  }

  renderCanvas = () => {
    if (window.innerWidth >= 700) {
      neuralnet(this.canvas);
    }
  };

  render() {
    const { children } = this.props;
    return (
      <Grid
        celled
        padded
        centered
        style={{
          padding: 0,
          width: '100vw',
          height: '100vh',
          position: 'absolute',
          backgroundColor: 'white',
        }}
      >
        <Grid.Row style={{ height: '100%' }}>
          <Grid.Column computer={8} tablet={0} mobile={0}>
            <a href="/">
              <Image
                style={{ zIndex: 1, position: 'absolute', margin: 10 }}
                size="mini"
                src="/images/logo.png"
              />
            </a>

            <canvas
              ref={(r) => {
                this.canvas = r;
              }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
              }}
            />
          </Grid.Column>

          <Grid.Column verticalAlign="middle" computer={8} tablet={8} mobile={14}>
            {children}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
