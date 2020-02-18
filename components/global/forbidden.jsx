import React from 'react';
import { Grid, Header as H, Button } from 'semantic-ui-react';
import styled from 'styled-components';

const Header = styled(H)`
  font-size: 25px;
  direction: rtl;
  text-align: center;
`;

function HeaderSection({ cid, profile, team, detail }) {
  if (!_.isUndefined(detail)) {
    if (detail.includes('profile')) profile = true;
    if (detail.includes('team')) {
      team = true;
    }
  }
  if (!profile && !team) {
    (profile = true), (team = true);
  }
  let string = 'لطفا پروفایل خود را تکمیل کنید.';
  if (!profile) string = 'لطفا تیم خود را تکمیل کنید.';
  if (profile && team) string = 'لطفا پروفایل و تیم خود را تکمیل کنید.';
  return (
    <Grid verticalAlign="middle" centered>
      <Grid.Row>
        <Grid.Column computer={15} tablet={15} mobile={10} style={{ paddingTop: '50px' }}>
          <Header as="h1">{string}</Header>
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
          {profile ? (
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
          ) : (
            <></>
          )}
          {team ? (
            <a href={`/dashboard/${cid}/team`}>
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
          ) : (
            <></>
          )}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default HeaderSection;
