import React from 'react';
import { Grid, Header as H } from 'semantic-ui-react';
import styled from 'styled-components';

const Header = styled(H)`
  font-size: 35px;
  direction: rtl;
  position: absolute;
  width: 100%;
  text-align: center;
`;

function HeaderSection() {
  return (
    <Grid verticalAlign="middle" centered>
      <Grid.Column computer={15} tablet={15} mobile={10} style={{paddingTop: '50px'}}>
        <Header as="h1">صفحه‌ی مورد‌نظر موجود نیست.</Header>
      </Grid.Column>
    </Grid>
  );
}

export default HeaderSection;
