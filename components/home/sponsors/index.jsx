import _ from 'lodash';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid as G } from 'semantic-ui-react';
import VisibilitySensor from 'react-visibility-sensor';
import Logo from './logo';

const Grid = styled(G)`
  margin-top: 1.5rem !important;
  margin-bottom: 2rem !important;
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
    const { logos } = this.props;
    const { visible } = this.state;
    return (
      <>
        <VisibilitySensor
          onChange={this.onChange}
          offset={{ top: 150, bottom: 150, left: -30, right: -30 }}
        >
          <div>
            <Grid centered>
              {_.map(logos, (logo, i) => {
                return (
                  <Grid.Column textAlign="center" computer={2} tablet={3} mobile={14} key={i}>
                    <Logo src={logo} height={60} visible={visible} />
                  </Grid.Column>
                );
              })}
            </Grid>
          </div>
        </VisibilitySensor>
      </>
    );
  }
}

export default Sponsors;
