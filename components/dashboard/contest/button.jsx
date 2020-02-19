import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import _ from 'lodash';
import { display } from 'styled-system';

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
    let background = '';
    if (this.state.hover) {
      background = 'rgba(29, 147, 247, 1)';
    } else {
      // background = 'rgba(52, 116, 235, 1)';
      background = 'black';
    }

    return (
      <Button
        href={this.props.clickOnPage}
        // attached={this.props.attached}
        style={{
          
          minHeight: '70px',
          // minWidth: '80px',
          // marginTop: '15px',
          color: 'white',
          backgroundColor: background,
          lineHeight: '15pt',

          alignContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
        }}
        // secondary
        onMouseEnter={this.toggleHoverOn}
        onMouseLeave={this.toggleHoverOff}
      >
        {this.props.title}
      </Button>
    );
  }
}
