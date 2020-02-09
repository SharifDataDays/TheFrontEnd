import React from 'react';
import { Grid, Header as H, Button } from 'semantic-ui-react';
import styled from 'styled-components';

const Header = styled(H)`
  font-size: 25px;
  direction: rtl;

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
          style={{
            paddingTop: '10px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <a href={`/dashboard/profile`}>
            <Button
              inverted
              secondary
              size="large"
              floated="right"
              style={{
                margin: '20px',
                width: '150px',
              }}
            >
              پروفایل
            </Button>
          </a>
          <a href={`dashboard/team/${cid}`}>
            <Button
              inverted
              secondary
              size="large"
              floated="right"
              style={{
                margin: '20px',
                width: '150px',
              }}
            >
              صفحه‌ی تیم
            </Button>
          </a>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default HeaderSection;
