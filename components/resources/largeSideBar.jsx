import React, { Component, createRef } from 'react';
import { Rail, Ref, Sticky, Grid, Segment } from 'semantic-ui-react';
import Content from './largeSideBarContent';

export default class StickySideBar extends Component {
  contextRef = createRef();

  render() {
    return (
      <Grid style={{ position: 'relative' }}>
        <Segment style={{ height: '1000px', paddingRight: '0', paddingLeft: '0', border: '0' }} />
        <Ref innerRef={this.contextRef}>
          <Segment style={{ paddingRight: '0', paddingLeft: '0', border: '0' }}>
            <Rail style={{ width: '400px' }}>
              <Sticky context={this.contextRef}>
                <Content />
              </Sticky>
            </Rail>
          </Segment>
        </Ref>
      </Grid>
    );
  }
}
