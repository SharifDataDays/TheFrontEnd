import React, { Component } from 'react';
import anime from 'animejs';
import { Box } from 'rebass';

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      participants: this.props.participants,
      num: this.props.participants,
      constant: true,
    };
  }

  // animation() {
  //   anime({
  //     targets: document.getElementsByClassName('stats')[0],
  //     value: [0, this.state.participants],
  //     round: 1,
  //     easing: 'easeInOutExpo',
  //     update: function() {
  //       document.getElementsByClassName('stats')[0].innerHTML = ':\\';
  //     },
  //   });
  // }

  counter = async () => {
    if (this.state.constant === true) {
      this.setState({
        num: 0,
        constant: false,
      });

      for (let i = 0; i <= this.state.participants; i++) {
        await sleep(50);
        console.log(i);
        this.setState({
          num: i,
        });
      }
    }
    // if (this.state.num === this.state.participants) {
    //   this.setState({
    //     constant: true,
    //   });
    // }
  };

  // componentDidMount() {
  //   // this.animation();
  // }

  render() {
    return (
      <div
        onMouseEnter={this.counter}
        style={{
          padding: '40px',
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p
          className="stats"
          style={{
            color: 'white',
            fontFamily: 'Arial, sans-serif',
            fontSize: '48px',
          }}
        >
          {this.state.num}
        </p>
      </div>
    );
  }
}

export default Stats;
