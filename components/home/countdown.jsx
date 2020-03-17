import React, { Component } from 'react';
import styled from 'styled-components';
import persianJs from 'persianjs';
import { space, color, typography } from 'styled-system';
import { Header } from 'semantic-ui-react';
import { Fade, Roll, Zoom, Flip, Bounce, LightSpeed } from 'react-reveal';
import Pulse from 'react-reveal/Pulse';

import NoSSR from 'react-no-ssr';

const Container = styled.div`
  ${space}
  display:flex;
  flex-direction: column;
  background-color: #191919;
`;

const Row = styled.div`
  ${space}
  display: flex;
  justify-content: center;
`;

const TimeBlock = styled.div`
  margin: 0px 2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TimeWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 3vh;
  width: 13vmin;
  border-radius: 10px;
  border: 2px solid #0088fb;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Time = styled.div`
  color: white;
  font-size: 6vmin;
`;

const Label = styled.div`
${space}
${typography}
${color}
text-align:center;
direction: rtl;
`;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const numberFarsi = (number) => {
  if (_.isUndefined(number) || _.isNull(number)) return;
  if (number < 0) number = 0;
  return persianJs(number.toString())
    .englishNumber()
    .toString();
};

class CountDown extends Component {
  constructor(props) {
    console.log(props);
    super();
    this.state = {
      second: numberFarsi(0),
      minute: numberFarsi(0),
      hour: numberFarsi(0),
      day: numberFarsi(0),
      target: new Date(props.timer.time).getTime(),
    };
  }

  componentDidMount() {
    const { target } = this.state;
    this.interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;
      this.setState({
        day: numberFarsi(Math.floor(distance / day)),
        hour: numberFarsi(Math.floor((distance % day) / hour)),
        minute: numberFarsi(Math.floor((distance % hour) / minute)),
        second: numberFarsi(Math.floor((distance % minute) / second)),
      });
    }, second);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { day, hour, minute, second } = this.state;
    // console.log(this.props);
    if (
      _.isUndefined(this.props.timer) ||
      _.isEmpty(this.props.timer) ||
      _.isNull(this.props.timer) ||
      _.isUndefined(this.props.timer.time) ||
      _.isNull(this.props.timer.time) ||
      _.isEmpty(this.props.timer.time) ||
      _.isUndefined(this.props.timer.title) ||
      _.isNull(this.props.timer.title) ||
      _.isEmpty(this.props.timer.tile)
    )
      return <></>;
    return (
      <>
        <NoSSR>
          <Container pt={4} px={5} pb={5}>
            {/* <Bounce >
              <Label
                fontSize={6}
                color={'white'}
                lineHeight="1.5"
                style={{
                  paddingBottom: '40px',
                  textShadow: `0px 10px 12px`
                }}
              >
                <a href="/signup">همین حالا </a>
                <p>
                در چالش نهایی شرکت کنید!
                </p>
              </Label>
            </Bounce> */}
            <Row pb={4}>
              <TimeBlock>
                <TimeWrapper>
                  <Time>{day}</Time>
                </TimeWrapper>
                <Label my={3} fontSize={4} color={'#9a9a9a'}>
                  روز
                </Label>
              </TimeBlock>
              <TimeBlock>
                <TimeWrapper>
                  <Time>{hour}</Time>
                </TimeWrapper>
                <Label my={3} fontSize={4} color={'#9a9a9a'}>
                  ساعت
                </Label>
              </TimeBlock>
              <TimeBlock>
                <TimeWrapper>
                  <Time>{minute}</Time>
                </TimeWrapper>
                <Label my={3} fontSize={4} color={'#9a9a9a'}>
                  دقیقه
                </Label>
              </TimeBlock>
              <TimeBlock>
                <TimeWrapper>
                  <Time>{second}</Time>
                </TimeWrapper>
                <Label my={3} fontSize={4} color={'#9a9a9a'}>
                  ثانیه
                </Label>
              </TimeBlock>
            </Row>
            <Row>
              <Label fontSize={[5, 6, 6]} color={'white'} lineHeight="1">
                {this.props.timer.title}
              </Label>
            </Row>
          </Container>
        </NoSSR>
      </>
    );
  }
}

export default CountDown;
