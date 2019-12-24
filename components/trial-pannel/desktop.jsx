import React from 'react';
import { Segment, Image, Header as H } from 'semantic-ui-react';
import styled from 'styled-components';

const RowSegment = styled(Segment)`
  padding: 0 !important;
  display: flex;
  justify-content: flex-end;
  border-right: 1px solid ${(props) => props.color} !important;
  border-left: 1px solid ${(props) => props.color} !important;
`;

const Header = styled(H)`
  font-size: 35px;
  font-family: IRANSans, 'Open Sans', 'Helvetica Neue', Arial, Helvetica, sans-serif;
  margin-right: 2rem !important;
  margin-top: 2rem !important;
`;

const SegmentExamplePiledSegments = () => (
  <Segment.Group
    basic
    raised
    style={{ width: '60vw', border: '0px solid', marginLeft: '20vw', display: 'flex' }}
  >
    <RowSegment color="red">
      <Header>(pre-requirements) پیش نیاز‌ها </Header>
      <Image src="/images/pre-requirements.jpg" size="small" inline />
    </RowSegment>
    <RowSegment raised color="red">
      <Header>(Data Cleaning) تمیزکردن داده</Header>
      <Image src="/images/data-cleaning.jpg" size="small" inline />
    </RowSegment>
    <RowSegment raised color="green">
      <Header> (Data Visulisation) مصورسازی داده</Header>
      <Image src="/images/data-visual.jpg" size="small" inline />
    </RowSegment>
    <RowSegment raised color="red">
      <Header>(Regression) رگرسیون</Header>
      <Image src="/images/linear-regression.jpeg" size="small" inline />
    </RowSegment>
  </Segment.Group>
);

export default SegmentExamplePiledSegments;
