import React, { Component } from 'react';
import Wrapper from './Wrapper';
import { Image } from 'semantic-ui-react';

class Logo extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      logo: this.props.logo_src,
      logo_filter: 'grayscale(100%)',
    };
  }

  change_to_color = () => {
    this.setState({
      logo_filter: 'none',
    });
  };

  change_to_gray = () => {
    this.setState({
      logo_filter: 'grayscale(100%)',
    });
  };

  render() {
    return (
      <Image
        src={this.state.logo}
        // size="mini"
        // centered
        style={{
          height: "100px",
          width: 'auto',
          margin: '20px',
          filter: this.state.logo_filter,
        }}
        onMouseEnter={this.change_to_color}
        onMouseLeave={this.change_to_gray}
      />
    );
  }
}

export default class Sponsers extends Component {
  constructor(props) {
    super(props);
    this.height = 250;
    this.state = {
      logos: this.props.logos,
      backgroundColor: 'rgba(245,245,245, 0.9)',
    };
  }
  make_layers = (logos) => {
    const layers_comp = logos.map((logo) => {
      return <Logo logo_src={logo}/>;
    });
    return layers_comp;
  };

  render() {
    return (
      // <Wrapper bg={this.state.backgroundColor} >
        <Image.Group style={{
            backgroundColor: this.state.backgroundColor,
            padding: '30px',
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        }}>{this.make_layers(this.state.logos)}</Image.Group>
      // </Wrapper>
    );
  }
}
