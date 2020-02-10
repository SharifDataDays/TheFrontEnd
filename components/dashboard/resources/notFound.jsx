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
      <Grid.Column computer={7} tablet={7} mobile={15} style={{paddingTop: '50px'}} >
        <Header as="h1">محتوای مورد‌نظر موجود نیست.</Header>
      </Grid.Column>
    </Grid>
  );
}

export default HeaderSection;
