import React, { Component } from 'react';
import styled from 'styled-components';
import VisibilitySensor from 'react-visibility-sensor';
import { Grid, Header as H, Image, Transition } from 'semantic-ui-react';

const Header = styled(H)`
  font-size: 3rem;
`;

const Text = styled.p`
  font-size: 1.75rem;
  line-height: 1.5;
`;

export default class Introduction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  onChangeVisibility = (isVisible) => {
    console.log(isVisible)
    this.setState({ isVisible });
  };

  render() {
    const { header, content } = this.props;
    return (
      <VisibilitySensor
        onChange={this.onChangeVisibility}
        offset={{ top: 150 }}
      >
        <div style={{ position: 'relative' }}>
          <Grid stackable inverted centered>
            <Grid.Row
              style={{
                padding: '12rem 2rem',
                backgroundColor: '#252525',
                color: 'white',
              }}
            >
              <Transition visible={this.state.isVisible} animation="scale" duration={500}>
                <Grid.Column textAlign="center" verticalAlign="middle" width={6}>
                  <Image style={{ padding: '2rem' }} size="large" src="/images/logo.png" />
                </Grid.Column>
              </Transition>
              <Grid.Column textAlign="center" verticalAlign="middle" width={7}>
                <Header as="h1">{header}</Header>
                <Text>{content}</Text>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </VisibilitySensor>
    );
  }
}
