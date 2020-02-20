import React, { Component } from 'react';
import 'intersection-observer';
import handleViewport from 'react-in-viewport';
import { Segment, Statistic as S, Grid } from 'semantic-ui-react';
import CountUp from 'react-countup';
import styled from 'styled-components';
import { space, layout, color, border, typography } from 'styled-system';
import _ from 'lodash';
import persianJs from 'persianjs';

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
          // inverted
          p={0}
          m={0}
          style={{
            border: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent',
            width: '280px',
          }}
        >
          <Statistic py={4} px={5} m={0} size="large">
            <Statistic.Value style={{ color: 'white' }}>
              <CountUp
                start={this.state.start}
                end={this.state.end}
                delay={0}
                duration={4}
                formattingFn={(number) => {
                  const num = persianJs(number.toString())
                    .englishNumber()
                    .toString()
                    .padEnd(4);
                  return num;
                }}
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
    <Container
      style={{
        backgroundColor: '#202020',
      }}
      py={[3, 4, 4]}
    >
      <Grid centered>
        <Grid.Row>
          {_.map(counts, (a, i) => {
            return (
              <Grid.Row key={i}>
                <SingleStat count={a.count} title={a.title} />
              </Grid.Row>
            );
          })}
        </Grid.Row>
      </Grid>
    </Container>
  );
}
