import React, { Component } from 'react';
import 'intersection-observer';
import handleViewport from 'react-in-viewport';
import Wrapper from './Wrapper';
import { Segment, Statistic } from 'semantic-ui-react';

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      participants: this.props.participants,
      num: this.props.participants,
      constant: false,
    };
  }

  componentDidMount() {
    this.setState({
      constant: true,
    });
  }

  componentWillUnmount() {
    this.setState({
      constant: false,
    });
  }
  counter = async () => {
    if (this.state.constant === true) {
      this.setState({
        num: 0,
        constant: false,
      });

      for (let i = 0; i <= this.state.participants; i++) {
        await sleep(30);
        console.log(i);
        this.setState({
          num: i,
        });
      }
    }
  };

  counter_end = () => {
    if (this.state.num === this.state.participants) {
      this.setState({
        constant: true,
      });
    }
  };

  render() {
    const A = (props) => {
      const { inViewport, forwardedRef } = props;
      return (
        <Wrapper className="viewport-block" ref={forwardedRef}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontFamily: 'IRANSansWeb',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              padding: '30px'
            }}
          >
            <p
              className="stats"
              style={{
                fontSize: '48px',
                margin: '0',
              padding: '0'
              }}
            >
              {this.state.num}
            </p>
            <p
              className="stats"
              style={{
                fontSize: '24px',
                margin: '0',
              padding: '0'
              }}
            >
              شرکت‌کننده
            </p>
          </div>
        </Wrapper>
      );
    };
    const ViewportBlock = handleViewport(A);
    return <ViewportBlock onEnterViewport={this.counter} onLeaveViewport={this.counter_end} />;
  }
}

export default Stats;
