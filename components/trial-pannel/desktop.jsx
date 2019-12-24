import React from 'react';
import { Segment, Image } from 'semantic-ui-react';
import styled from 'styled-components';

const RowSegment = styled(Segment)`
  padding: 0 !important;
`;

const SegmentExamplePiledSegments = () => (
  <Segment.Group basic raised style={{ width: '60vw', border: '0px solid', marginLeft: '20vw' }}>
    <RowSegment raised>
      <Image src="/images/pre-requirements.jpg" size="small" inline />
    </RowSegment>
    <RowSegment raised>
      <Image src="/images/data-cleaning.jpg" size="small" inline />
    </RowSegment>
    <RowSegment raised>
      <Image src="/images/data-visual.jpg" size="small" inline />
    </RowSegment>
    <RowSegment raised>
      <Image src="/images/linear-regression.jpeg" size="small" inline />
    </RowSegment>
  </Segment.Group>
);

export default SegmentExamplePiledSegments;
