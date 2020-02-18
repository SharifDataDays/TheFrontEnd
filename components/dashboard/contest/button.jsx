import React, { Component } from 'react';
import {Button} from 'semantic-ui-react'
import _ from 'lodash';

export class BoxButton extends Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
    this.toggleHoverOff.bind(this);
    this.toggleHoverOn.bind(this);
  }

  toggleHoverOff = () => {
    this.setState({ hover: false });
  };

  toggleHoverOn = () => {
    this.setState({ hover: true });
  };

  render() {
      let background = ''
      if (this.state.hover) {
          background = 'rgba(94, 178, 247, 1)';
      }else {
        background = 'rgba(52, 116, 235, 1)';
      }

    return (
      <Button
        attached={this.props.attached}
        style={{
          minHeight: '40px',
          // minWidth: '100px',
          marginTop: '15px',
          color: 'white',
          backgroundColor: background,
        }}
        onMouseEnter={this.toggleHoverOn}
        onMouseLeave={this.toggleHoverOff}
      >
        {this.props.title}
      </Button>
    );
  }
}
