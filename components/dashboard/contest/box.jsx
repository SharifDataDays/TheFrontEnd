import React, { Component } from 'react';
import styled from 'styled-components';
import { space, color } from 'styled-system';
import NoSSR from 'react-no-ssr';
import { Divider, Image, Grid, Header as H, Responsive } from 'semantic-ui-react';
import { Zoom, Fade } from 'react-reveal';
import _ from 'lodash';
import moment from 'jalali-moment';

const Container = styled.div`
  ${space}
`;

const Header = styled.text`
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

  render() {
    console.log(contest);

    const { contest } = this.props;
    let backgroundColor = 'rgba(32, 32, 32, 0.6)';
    let border = '2px solid rgba(32, 32, 32, 0.8)';
    if (this.state.hover) {
      backgroundColor = 'rgba(29, 147, 247, 0.8)';
      border = '2px solid rgba(29, 147, 247, 1)';
    }

    const content = (
      <>
        <Header>{contest.title}</Header>
        <Divider />
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
            {`شروع از ${moment
              .from(contest.start_time, 'en')
              .locale('fa')
              .fromNow()}`}
          </div>
          <Container pt={3}>{contest.description}</Container>
        </Container>
      </>
    );
    return (
      <div>
        <Grid.Column>
          <Container mx={[2, 5, 5]} my={[3, 4, 4]}>
            <a href={`/dashboard/${contest.id}`}>
              <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
              <Container
                  py={[4, 4, 4]}
                  px={[3, 4, 4]}
                  style={{
                    backgroundColor,
                    border,

                    borderRadius: '10px',
                    color: 'white',
                     width: '300px',
                    // height: '350px',

                    alignContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'justify',
                  }}
                  onMouseEnter={this.toggleHoverOn}
                  onMouseLeave={this.toggleHoverOff}
                >{content}</Container>
              </Responsive>
              <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <Container
                  py={[4, 4, 4]}
                  px={[3, 4, 4]}
                  style={{
                    backgroundColor,
                    border,

                    borderRadius: '10px',
                    color: 'white',
                    width: '350px',
                    minHeight: '400px',

                    alignContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'justify',
                  }}
                  onMouseEnter={this.toggleHoverOn}
                  onMouseLeave={this.toggleHoverOff}
                >{content}</Container>
              </Responsive>
            </a>
          </Container>
        </Grid.Column>
      </div>
    );
  }
}

export default Box;
