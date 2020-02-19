import React, { Component } from 'react';
import styled from 'styled-components';
import persianJs from 'persianjs'
import { space, color, typography } from 'styled-system';

const Container = styled.div`
${space}
display:flex;
flex-direction:column;
background-color:#191919;
`;

const Row = styled.div`
${space}
display: flex;
justify-content: center;
`;

const TimeBlock = styled.div`
margin: 0px 2vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;

const TimeWrapper = styled.div`
background-color:white;
padding: 3vh;
width:13vmin;
border-radius:10px;
border: 2px solid #0088fb;
display:flex;
align-items:center;
justify-content:center;
`

const Time = styled.div`
color:#0088fb;
font-size:6vmin;
`;

const Label = styled.div`
${space}
${typography}
${color}
text-align:center;
`;

const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

const target = new Date('feb 25, 2020 00:00:00').getTime(); //todo

class CountDown extends Component {
  constructor() {
    super();
    this.state = {
      second: 0,
      minute: 0,
      hour: 0,
      day: 0,
    };
  }

  componentDidMount(): void {
    setInterval(() => {
      let now = new Date().getTime();
      let distance = target - now;
      this.setState({
        day: persianJs(Math.floor(distance / (day)).toString()).englishNumber().toString(),
        hour: persianJs(Math.floor((distance % (day)) / (hour)).toString()).englishNumber().toString(),
        minute: persianJs(Math.floor((distance % (hour)) / (minute)).toString()).englishNumber().toString(),
        second: persianJs(Math.floor((distance % (minute)) / second).toString()).englishNumber().toString(),
      });
    }, second);
  }

  render() {
    return (
      <>
        <Container p={5}>
          <Row
            pb={4}
          >
            <TimeBlock>
              <TimeWrapper><Time>{this.state.day}</Time></TimeWrapper>
              <Label my={3} fontSize={4} color={'#9a9a9a'}>روز</Label>
            </TimeBlock>
            <TimeBlock>
              <TimeWrapper><Time>{this.state.hour}</Time></TimeWrapper>
              <Label my={3} fontSize={4} color={'#9a9a9a'}>ساعت</Label>
            </TimeBlock>
            <TimeBlock>
              <TimeWrapper><Time>{this.state.minute}</Time></TimeWrapper>
              <Label my={3} fontSize={4} color={'#9a9a9a'}>دقیقه</Label>
            </TimeBlock>
            <TimeBlock>
              <TimeWrapper><Time>{this.state.second}</Time></TimeWrapper>
              <Label my={3} fontSize={4} color={'#9a9a9a'}>ثانیه</Label>
            </TimeBlock>
          </Row>
          <Row>
            <Label fontSize={6} color={'white'} lineHeight='1.5'>تا پایان مهلت ثبت تیم</Label>
          </Row>
        </Container>
      </>
    );
  }
}

export default CountDown;