import React, { Component } from 'react';
import styled from 'styled-components';
import VisibilitySensor from 'react-visibility-sensor';
import { Grid, Header as H, Image, Transition } from 'semantic-ui-react';
import { Fade } from 'react-reveal';
import { typography, space } from 'styled-system';


const Header = styled(H)`
  ${typography}
`;

const Container = styled.div`
  ${space};
  background-color: #06246d;
  color: white;
  position: relative;
`;

const Text = styled.p`
  ${typography};
  direction: rtl;
`;
export default class Introduction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  onChangeVisibility = (isVisible) => {
    console.log(isVisible);
    this.setState({ isVisible });
  };

  render() {
    const { header, content } = this.props;
    return (
      <div style={{ position: 'relative' }}>
        <Grid stackable inverted centered>
          <Grid.Row
            style={{
              padding: '12rem 2rem',
              backgroundColor: '#252525',
              color: 'white',
            }}
          >
            <Grid.Column textAlign="center" verticalAlign="middle" width={6}>
              <Fade left>
                <Image style={{ padding: '2rem' }} size="large" src="/images/logo.png" />
              </Fade>
            </Grid.Column>

            <Grid.Column textAlign="center" verticalAlign="middle" width={7}>
              <Fade right>
                <Header as="h1">{header}</Header>
                <Text>{content}</Text>
              </Fade>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
