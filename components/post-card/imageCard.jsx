/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { Component } from 'react';
import { Image } from 'rebass/styled-components';

class HeaderImage extends Component {
  constructor(props) {
    super(props);
    this.state = { opacity: '100%' };
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseExit = this.onMouseExit.bind(this);
  }

  onMouseEnter() {
    this.setState({ opacity: '50%' });
  }

  onMouseExit() {
    this.setState({ opacity: '100%' });
  }

  render() {
    const { topic } = this.props;
    const { width } = this.props;
    const { height } = this.props;
    const srcImage = `https://source.unsplash.com/1600x900/?${topic}/350x350`;
    const borderRadius = '10px';
    const { opacity } = this.state;
    return (
      <Image
        className="image-card"
        src={srcImage}
        sx={{ width, height, marginTop: '0', borderRadius, opacity }}
        onMouseEnter={this.onMouseEnter}
        onMouseOut={this.onMouseExit}
      />
    );
  }
}

export default HeaderImage;
