import React from 'react';
import { Responsive, Segment } from 'semantic-ui-react';
import SmallResources from './smallResource';
import LargeResources from './largeResource';

const ResponsiveResource = () => (
  <Segment.Group>
    <Responsive as={Segment} minWidth={320} maxWidth={900}>
      <SmallResources />
    </Responsive>
    <Responsive as={Segment} minWidth={901}>
      <LargeResources />
    </Responsive>
  </Segment.Group>
);

export default ResponsiveResource;
