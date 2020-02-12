import React, { Component } from 'react';
import 'intersection-observer';
import handleViewport from 'react-in-viewport';
import { Segment, Statistic as S } from 'semantic-ui-react';
import CountUp from 'react-countup';
import styled from 'styled-components';
import { space, layout, color, border, typography } from 'styled-system';
import _ from 'lodash';

const Container = styled.div`
  ${space}
  ${color}
  ${border}
`;
const Statistic = styled(S)`
  ${space}
  ${color}
`;

class SingleStat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      end: 0,
      started: false,
    };
  }

  A = (props) => {
    if (props.inViewport && !this.state.started) {
      this.setState({
        start: 0,
        end: this.props.count,
        started: true,
      });
    }

    return (
      <div ref={props.forwardedRef}>
        <Segment
          inverted
          p={0}
          m={0}
          style={{
            borderRadius: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Statistic inverted py={4} m={0}>
            <Statistic.Value>
              <CountUp
                start={this.state.start}
                end={this.state.end}
                delay={0.2}
                duration={3}
              ></CountUp>
            </Statistic.Value>
            <Statistic.Label style={{ color: '#1d93f7' }}>{this.props.title}</Statistic.Label>
          </Statistic>
        </Segment>
      </div>
    );
  };

  render() {
    const ViewportBlock = handleViewport(this.A);

    return (
      <ViewportBlock
        number={this.props.participants}
        onEnterViewport={() => {
          if (!this.state.started) {
            this.setState({
              start: 0,
              end: this.props.count,
              started: true,
            });
          }
        }}
        onLeaveViewport={{}}
      />
    );
  }
}

export default function Stats({ counts }) {
  
  return (
    <Container py={3} style={{ backgroundColor: '#202020' }}>
      {_.map(counts, (a) => {
        
        return <SingleStat count={a.count} title={a.title} />;
      })}
    </Container>
  );
}
