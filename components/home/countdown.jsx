import React, { Component } from 'react';
import styled from 'styled-components';
import persianJs from 'persianjs';
import { space, color, typography } from 'styled-system';

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
  color: #0088fb;
  font-size: 6vmin;
`;

const Label = styled.div`
${space}
${typography}
${color}
text-align:center;
`;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const numberFarsi = (number) => {
  if (_.isUndefined(number) || _.isNull(number)) return;
  return persianJs(number.toString())
    .englishNumber()
    .toString();
};

class CountDown extends Component {
  constructor(props) {
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
    setInterval(() => {
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

  render() {
    const { day, hour, minute, second } = this.state;
    return (
      <>
        <Container p={5}>
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
            <Label fontSize={[5, 6, 6]} color={'white'} lineHeight="1.5">
              تا پایان مهلت ثبت تیم
            </Label>
          </Row>
        </Container>
      </>
    );
  }
}

export default CountDown;
