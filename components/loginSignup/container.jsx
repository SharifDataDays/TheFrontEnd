import React, { Component } from 'react';
import { Grid, Responsive, Image } from 'semantic-ui-react';
import neuralnet from './neuralnet';

const image = require('./image.png')

export default class LoginSignupContainer extends Component {
  componentDidMount() {
    if (window.innerWidth >= 700){
      this.renderCanvas();
    }
      
  }

  componentDidUpdate() {
    if (window.innerWidth >= 700){
      this.renderCanvas();
    }
  }

  renderCanvas = () => {
    if (window.innerWidth >= 700){
      neuralnet(this.refs.canvas);
    }
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

        {/* <Responsive as={Grid.Column} minWidth={700} width={8}>
          <Image src={image} style={{
              width: '100%',
              height: '100%',
            }}/>
        </Responsive> */}

        <Responsive as={Grid.Column} minWidth={700} width={8}>
          <canvas
              ref="canvas"
              style={{
                width: '100%',
                height: '100%',
              }}
          />
        </Responsive>

        {/* <Grid.Column width={8}>
          <canvas
            ref="canvas"
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </Grid.Column> */}
        <Grid.Column computer={8} tablet={8} mobile={14}>{children}</Grid.Column>
        
      </Grid>
    );
  }
}
