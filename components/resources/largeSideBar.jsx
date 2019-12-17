import React, { Component, createRef } from 'react';
import { Rail, Ref, Sticky, Grid, Segment, Menu, Header } from 'semantic-ui-react';
import Content from './largeSideBarContent';

export default class StickySideBar extends Component {
  contextRef = createRef();

  render() {
    return (
      <Grid style={{ position: 'relative', left: '5vw' }}>
        <Segment style={{ height: '1000px', paddingRight: '0', paddingLeft: '0', border: '0' }} />
        <Ref innerRef={this.contextRef}>
          <Segment style={{ paddingRight: '0', paddingLeft: '0' }}>
            <Rail position="right" style={{ width: '400px' }}>
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
