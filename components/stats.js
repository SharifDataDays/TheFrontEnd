import React from 'react';
import { render } from 'react-dom';
import anime from 'animejs';

class Box extends React.Component {
  componentDidMount() {
    this.anime();
  }

  componentDidUpdate() {
    this.anime();
  }

  anime = () => {
    anime({
      targets: '.dom-attribute-demo input',
      value: [0, 1000],
      round: 1,
      easing: 'easeInOutExpo',
    });
  };

  render() {
    return (
      <div ref={(box) => (this.box = box)}>
        <h2>Start editing to see some magic happen {'\u2728'}</h2>
      </div>
    );
  }
}

export default class Stats extends React.Component {
  state = {
    translateX: 0,
    translateY: 0,
  };

  render() {
    const { translateX, translateY } = this.state;

    return (
      <div>
        <button
          onClick={() =>
            this.setState({
              translateX: translateX + 10,
              translateY: translateY + 10,
            })
          }
        >
          +10
        </button>
        <Box translateX={translateX} translateY={translateY} />
      </div>
    );
  }
}
