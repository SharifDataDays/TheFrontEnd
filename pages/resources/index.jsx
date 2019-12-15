import React, { Component } from 'react';
import {
  Button,
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react';
import TestSideBar from '~/components/resources/smallSideBar';

const HorizontalSidebar = () => (
  // <Sidebar as={Segment} animation="push" direction="left" visible>
  //   <Grid textAlign="center">
  //     <Grid.Row columns={1}>
  //       <Grid.Column>
  //         <Header as="h3">New Content Awaits</Header>
  //       </Grid.Column>
  //     </Grid.Row>
  //     <Grid columns={3} divided>
  //       <Grid.Column>
  //         <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
  //       </Grid.Column>
  //       <Grid.Column>
  //         <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
  //       </Grid.Column>
  //       <Grid.Column>
  //         <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
  //       </Grid.Column>
  //     </Grid>
  //   </Grid>
  // </Sidebar>
  <TestSideBar />
);

export default HorizontalSidebar;
