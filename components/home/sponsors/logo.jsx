import React, { Component } from 'react';
import styled from 'styled-components';
import { Image as Im } from 'semantic-ui-react';

const Image = styled(Im)`
  filter: ${(props) => (props.color === 'gray' ? 'grayscale(100%)' : 'none')};
  opacity: ${(props) => (props.color === 'gray' ? 0.66 : 1)};
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
    const { height, src } = this.props;
    const { color } = this.state;

    return (
      <Image
        src={src}
        height={height}
        color={color}
        onMouseEnter={this.changeToColor}
        onMouseLeave={this.changeToGray}
      />
    );
  }
}

export default Logo;
