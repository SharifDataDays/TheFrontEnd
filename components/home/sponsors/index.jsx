import _ from 'lodash';
import React, { Component } from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import { Grid } from 'semantic-ui-react';
import VisibilitySensor from 'react-visibility-sensor';
import Logo from './logo';

const logo1 = {
  image: '/images/sponsors/sharif.png',
  link: 'https://ce.sharif.edu/',
  invert: true,
};
const logo2 = {
  image: '/images/sponsors/ssc.png',
  link: 'https://ssc.ce.sharif.edu/',
  invert: true,
};
const logo3 = {
  image: '/images/sponsors/torob.png',
  link: 'https://torob.com/',
  invert: false,
};

const logos = [logo1, logo2, logo3];

const Container = styled.div`
  ${space};
  color: white;
  background-color: #202020;
  margin-top: -8px;
`;

class Sponsors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(isVisible) {
    this.setState({
      visible: isVisible,
    });
  }

  render() {
    const { visible } = this.state;
    return (
      <>
        <VisibilitySensor
          onChange={this.onChange}
          offset={{ top: 150, bottom: 150, left: -30, right: -30 }}
        >
          <Container p={[3, 4, 4]}>
            <Grid centered>
              {_.map(logos, (logo, i) => {
                return (
                  <Grid.Column textAlign="center" computer={2} tablet={3} mobile={5} key={i}>
                    <Logo src={logo} height={60} visible={visible}/>
                  </Grid.Column>
                );
              })}
            </Grid>
          </Container>
        </VisibilitySensor>
      </>
    );
  }
}

export default Sponsors;
