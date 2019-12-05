import React, { Component } from 'react';
import Parallax from 'react-springy-parallax';

const bg_style = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: '100%',
};

export default class Parall extends Component {
  constructor(props) {
    super(props);
    this.layers_count = this.props.layers.length;
    this.sp = 0.5 / this.layers_count;
  }

  make_layers = (layers) => {
    const layers_comp = layers.map((layer, index) => {
      return (
        <Parallax.Layer offset={0} speed={this.sp * index} key={'l' + index}>
          <img src={layer} style={bg_style}/>
        </Parallax.Layer>
      );
    });
    return layers_comp;
  };

  render() {
    return (
      <div>
        <Parallax ref="parallax" pages={2}>
          <div style={{ position: 'relative' }}>
            {this.make_layers(this.props.layers.slice(0, this.layers_count - 1))}
            <Parallax.Layer offset={0} speed={this.sp * this.layers_count}>
              <div style={bg_style}>
                <img
                  src={this.props.layers[this.layers_count - 1]}
                  style={{ position: 'relative', width: '100%' }}
                />
                <div
                  style={{
                    position: 'relative',
                    backgroundColor: this.props.backgroundColor,
                    marginTop: '-10px',
                    height: '1000px',
                  }}
                >
                  {this.props.children}
                </div>
              </div>
            </Parallax.Layer>
          </div>
        </Parallax>
      </div>
    );
  }
}
