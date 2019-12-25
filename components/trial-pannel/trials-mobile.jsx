import React from 'react';
import { Card, Image, Label as Lb } from 'semantic-ui-react';
import styled from 'styled-components';

const Label = styled(Lb)`
  margin-left: 0.3rem !important;
`;

const TrialMobile = ({ fontSize }) => (
  <>
    <Card style={{ width: '100%' }}>
      <Image src="/images/data-visual.jpg" wrapped style={{ width: '100%' }} />
      <Card.Content>
        <Card.Header style={{ direction: 'rtl', fontSize }}>
          پیش نیاز‌ها (pre-requirements)
        </Card.Header>
        <Card.Description>
          <Label circular color="grey">
            2
          </Label>
          <Label circular color="black">
            1
          </Label>
          <Label circular color="violet">
            3
          </Label>
        </Card.Description>
      </Card.Content>
    </Card>
  </>
);

export default TrialMobile;
