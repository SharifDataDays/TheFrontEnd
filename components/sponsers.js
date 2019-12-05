import React, { Component } from 'react';


class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo_height: this.props.height,
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
      <img
        src={this.state.logo}
        style={{
          height: this.state.logo_height,
          padding: '20px',
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
      logo_width: 100,
      logos: this.props.logos,
      logo_filter: 'grayscale(100%)',
      backgroundColor: 'rgba(245,245,245, 0.9)',
    };
  }

  change_to_color = () => {
    this.setState({
      logo_filter: 'none',
      //   backgroundColor: 'rgba(245,245,245, 0.6)',
    });
  };

  change_to_gray = () => {
    this.setState({
      logo_filter: 'grayscale(100%)',
      //   backgroundColor: 'rgba(245,245,245, 0.5)',
    });
  };

  make_layers = (logos) => {
    const layers_comp = logos.map((logo) => {
      return <Logo logo_src={logo} height="100px" />;
    });
    return layers_comp;
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: this.state.backgroundColor,
          padding: '20px',
          paddingTop: '40px',
          paddingBottom: '40px',
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {this.make_layers(this.state.logos)}
        
      </div>
    );
  }
}
