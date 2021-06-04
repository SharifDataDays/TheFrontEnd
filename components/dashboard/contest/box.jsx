import React, { Component } from 'react';
import styled from 'styled-components';
import { space, color } from 'styled-system';
import NoSSR from 'react-no-ssr';
import {
  Divider,
  Image,
  Grid,
  Header as H,
  Responsive,
  Button,
  Segment as S,
} from 'semantic-ui-react';
import { Zoom, Fade } from 'react-reveal';
import _ from 'lodash';
import moment from 'jalali-moment';
import { BoxButton } from './button';
import persianJs from 'persianjs';

const Container = styled.div`
  ${space}
`;

const Segment = styled(S)`
  ${space}
`;

const Header = styled.div`
  color: white;
  font-size: 30px;
  align-content: center;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export class Box extends Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
    this.toggleHoverOff.bind(this);
    this.toggleHoverOn.bind(this);
    this.box.bind(this);
  }

  toggleHoverOff = () => {
    this.setState({
      hover: false,
    });
  };
  toggleHoverOn = () => {
    this.setState({
      hover: true,
    });
  };

  box = (width, minHeight) => {
    const { contest } = this.props;
    let backgroundColor = 'rgba(32, 32, 32, 0.6)';
    let border = '2px solid rgba(32, 32, 32, 0.8)';
    if (this.state.hover) {
      backgroundColor = 'rgba(29, 147, 247, 0.8)';
      border = '2px solid rgba(29, 147, 247, 1)';
    }

    // console.log('this.propsssssss of box:', this.props.contest);

    return (
      <Container
        style={{
          boxShadow: `-20px 20px 30px rgba(32, 32, 32, 0.5)`,
        }}
      >
        <Segment
          // color="black"
          attached={'top'}
          style={{
            backgroundColor,
            // border,
            width,
            minHeight,

            border: 'none',
            borderRadius: '10px 10px 0px 0px',
            color: 'white',

            // boxShadow: `-20px 20px 30px rgba(32, 32, 32, 0.5)`,
            alignContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'justify',
          }}
        >
          <Container
            py={[3, 3, 3]}
            px={[3, 3, 3]}

            // onMouseEnter={this.toggleHoverOn}
            // onMouseLeave={this.toggleHoverOff}
          >
            {' '}
            <Container pb={4}>
              <Header>{contest.title}</Header>
            </Container>
            <Container
              style={{
                alignContent: 'center',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'justify',
              }}
            >
              <div
                style={{
                  color: 'black',
                }}
              >
                {`شروع از 
            ${persianJs(
              moment
                .from(contest.start_time, 'en')
                .locale('fa')
                .fromNow(),
            )
              .englishNumber()
              .toString()}
            `}
              </div>

              <Container pt={3}>{contest.description}</Container>
            </Container>
          </Container>
        </Segment>
        <Button.Group size="medium" attached="bottom" widths="5">
          <BoxButton title="ورود" contest={contest} clickOnPage={`/dashboard/${contest.id}`} />

          {/* contest.id + '' != '2' ? (
            <>
              <BoxButton
                title="نمرات نهایی"
                contest={contest}
                clickOnPage={`/scoreboard/final`}
              />
              <BoxButton
                title="رده‌بندی اولیه"
                contest={contest}
                clickOnPage={`/scoreboard/${contest.id}/0`}
              />
            </>
          ) : (
            <></>
          ) */}
          {/* {contest.team_size === 1 ? (
            <></>
          ) : (
            <BoxButton
              title="تیم"
              contest={contest}
              clickOnPage={`/dashboard/${contest.id}/team`}
            />
          )} */}
        </Button.Group>
      </Container>
    );
  };

  render() {
    const { contest } = this.props;
    return (
      <div>
        <Grid.Column>
          <Container mx={[2, 5, 5]} my={[3, 4, 4]}>
            {/* <a href={`/dashboard/${contest.id}`}> */}
            <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
              {this.box('300px', 'auto')}
            </Responsive>
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
              {this.box('360px', '340px')}
            </Responsive>
            {/* </a> */}
          </Container>
        </Grid.Column>
      </div>
    );
  }
}

export default Box;
