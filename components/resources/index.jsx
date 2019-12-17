import React from 'react';
import { Responsive, Segment } from 'semantic-ui-react';
import SmallResources from './smallResource';
import LargeResources from './largeResource';

const ResponsiveResource = () => (
  <Segment.Group>
    <Responsive as={Segment} minWidth={320} maxWidth={600}>
      <SmallResources width="80vw" />
    </Responsive>
    <Responsive as={Segment} minWidth={601} maxWidth={1000}>
      <SmallResources width="36vw" />
    </Responsive>
    <Responsive as={Segment} minWidth={901}>
      <LargeResources />
    </Responsive>
  </Segment.Group>
);

export default ResponsiveResource;
