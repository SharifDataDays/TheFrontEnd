import React from 'react';
import { Segment, Image, Header as H, Label as Lb } from 'semantic-ui-react';
import styled from 'styled-components';

const RowSegment = styled(Segment)`
  padding: 0 !important;
  display: flex;
  justify-content: flex-end;
`;

const Header = styled(H)`
  font-size: 35px;
  font-family: IRANSans, 'Open Sans', 'Helvetica Neue', Arial, Helvetica, sans-serif;
  margin-right: 2rem !important;
  margin-top: 2rem !important;
  width: 75% !important;
  text-align: right;
`;

const Label = styled(Lb)`
  margin-left: 0.2rem !important;
`;

const SegmentLabel = styled(Segment)`
  display: flex !important;
`;

const Text = styled.p`
  margin-bottom: 1rem;
`;

const SegmentExamplePiledSegments = () => (
  <Segment.Group
    basic
    raised
    style={{ width: '60vw', border: '0px solid', marginLeft: '20vw', display: 'flex' }}
  >
    <RowSegment>
      <Header>
        <Text>(pre-requirements) پیش نیاز‌ها</Text>
        <SegmentLabel basic raised>
          {' '}
          <Label circular color="grey">
            2
          </Label>
          <Label circular color="black">
            1
          </Label>
          <Label circular color="violet">
            3
          </Label>
        </SegmentLabel>
      </Header>
      <Image src="/images/pre-requirements.jpg" size="small" inline />
    </RowSegment>
    <RowSegment>
      <Header>
        <Text>(Data Cleaning) تمیزکردن داده</Text>
      </Header>
      <Image src="/images/data-cleaning.jpg" size="small" inline />
    </RowSegment>
    <RowSegment raised>
      <Header>
        <Text>(Data Visulisation) مصورسازی داده</Text>
      </Header>
      <Image src="/images/data-visual.jpg" size="small" inline />
    </RowSegment>
    <RowSegment raised>
      <Header>
        <Text>(Regression) رگرسیون</Text>
      </Header>
      <Image src="/images/linear-regression.jpeg" size="small" inline />
    </RowSegment>
  </Segment.Group>
);

export default SegmentExamplePiledSegments;
