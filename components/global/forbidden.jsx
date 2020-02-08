import React from 'react';
import { Grid, Header as H, Button } from 'semantic-ui-react';
import styled from 'styled-components';

const Header = styled(H)`
  font-size: 25px;
  direction: rtl;
  position: absolute;
  width: 100%;
  text-align: center;
`;

function HeaderSection({ cid }) {
  return (
    <Grid verticalAlign="middle" centered>
      <Grid.Row>
        <Grid.Column computer={15} tablet={15} mobile={10} style={{ paddingTop: '50px' }}>
          <Header as="h1">لطفا پروفایل و تیم خود را تکمیل کنید.</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column
          computer={15}
          tablet={15}
          mobile={10}
          style={{ paddingTop: '50px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
        >
          <a href={`/dashboard/profile`}>
            <Button secondary size="large" floated="right">
              پروفایل
            </Button>
          </a>
          <a href={`/dashboard/${cid}/team`}>
            <Button secondary size="large" floated="right">
              تیم
            </Button>
          </a>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default HeaderSection;
