import React, { Component } from 'react';

const logo1 = 'http://s6.picofile.com/file/8380759042/All_Logos39.png';
const logo2 = 'http://s6.picofile.com/file/8380760484/Bazaar_logo_and_logotype.png';
const logo3 = 'http://s7.picofile.com/file/8380759184/whicapp_%D8%A8%D9%84%D8%AF_logos_.png';
const logo4 = 'http://s7.picofile.com/file/8380759168/Tap30.png';
const logo5 = 'http://s6.picofile.com/file/8380759092/shariflogo.png';

const logos_color = [logo1, logo2, logo3, logo4, logo5];

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
      logos: logos_color,
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
