import React, { Component } from 'react';
import styled from 'styled-components';
import { Image as Im } from 'semantic-ui-react';

function change(color, visible) {
  if (visible) return false;
  return color === 'gray';
}

const Image = styled(Im)`
  filter: ${(props) => (change(props.color, props.visible) ? 'grayscale(100%)' : 'none')};
  opacity: ${(props) => (change(props.color, props.visible) ? 0.66 : 1)};
  margin-left: auto;
  margin-right: auto;
`;

class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = { color: 'gray' };
    this.changeToColor = this.changeToColor.bind(this);
    this.changeToGray = this.changeToGray.bind(this);
  }

  changeToColor() {
    this.setState({
      color: 'colored',
    });
  }

  changeToGray() {
    this.setState({
      color: 'gray',
    });
  }

  render() {
    const { height, src, visible } = this.props;
    const { color } = this.state;
    return (
      <Image
        src={src}
        height={height}
        color={color}
        visible={visible}
        onMouseEnter={this.changeToColor}
        onMouseLeave={this.changeToGray}
      />
    );
  }
}

export default Logo;
