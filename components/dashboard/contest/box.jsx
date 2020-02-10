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

  border-radius: 10px;
  color: white;
`;

const Header = styled.text`
  color: white;
  font-size: 28px;
  align-content: center;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export class Box extends Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
    this.toggleHover.bind(this);
  }

  toggleHover = () => {
    this.setState({
      hover: !this.state.hover,
    });
  };

  render() {
    console.log(contest);

    const { contest } = this.props;
    let backgroundColor = 'rgba(32, 32, 32, 0.8)';
    let border = '2px solid rgba(32, 32, 32, 1)';
    if (this.state.hover) {
      backgroundColor = 'rgba(29, 147, 247, 0.7)';
      border = '2px solid rgba(29, 147, 247, 1)';
    }
    return (
      <a href={`/dashboard/${contest.id}`}>
        <Grid.Column>
          <Container
            py={[5, 5, 5]}
            px={[4, 5, 5]}
            m={[3, 5, 5]}
            style={{
              backgroundColor,
              border,
            }}
            onMouseEnter={this.toggleHover}
            onMouseLeave={this.toggleHover}
          >
            <Header>{contest.title}</Header>
            <Divider inverted />
            <div>{`شروع از ${moment
              .from(contest.start_time, 'en')
              .locale('fa')
              .fromNow()}`}</div>
          </Container>
        </Grid.Column>
      </a>
    );
  }
}

export default Box;
