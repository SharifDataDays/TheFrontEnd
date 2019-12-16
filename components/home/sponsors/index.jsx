import _ from 'lodash';
import React, { Component, createRef } from 'react';
import styled from 'styled-components';
import { Grid as G, Ref, Visibility, Sticky, Table } from 'semantic-ui-react';
import Logo from './logo';

const Grid = styled(G)`
  margin-top: 1.5rem !important;
`;

export default class Sponsors extends Component {
  state = {
    calculations: {
      direction: 'none',
      height: 0,
      width: 0,
      topPassed: false,
      bottomPassed: false,
      pixelsPassed: 0,
      percentagePassed: 0,
      topVisible: false,
      bottomVisible: false,
      fits: false,
      passing: false,
      onScreen: false,
      offScreen: false,
    },
  };
  contextRef = createRef();

  handleUpdate = (e, { calculations }) => this.setState({ calculations });

  render() {
    const fits = this.state.calculations.fits;
    return (
      <Ref innerRef={this.contextRef}>
        <Visibility onUpdate={this.handleUpdate}>
          <Grid centered>
            {_.map(this.props.logos, (logo, i) => {
              return (
                <Grid.Column textAlign="center" computer={2} tablet={3} mobile={14} key={i}>
                  <Logo src={logo} height={60}/>
                </Grid.Column>
              );
            })}
          </Grid>
        </Visibility>
      </Ref>
    );
  }
}
