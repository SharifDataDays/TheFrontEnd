import _ from 'lodash';
import styled from 'styled-components';
import { space, layout, color, border, typography, flex } from 'styled-system';
import { Header, List, Divider, Button, Grid, Form, Message, Popup } from 'semantic-ui-react';

import Input from './input';

const Label = styled.label`
  ${space}
  ${layout}
  ${typography}
  ${color}
`;

const Container = styled.div`
  ${space}
  ${color}
  ${border}
`;

function HeaderDiv({ finilized }) {
  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: '20px',
      }}
    >
      <Header size="huge" dir="RTL" floated="left">
        تیم من
      </Header>
      <Popup
        dir="RTL"
        position="right center"
        content="پس از ثبت نهایی امکان تغییر نام و اعضا وجود ندارد!"
        inverted
        trigger={
          <Form.Button
            primary
            inverted
            content="ثبت نهایی"
            floated="right"
            size="big"
            disabled={finilized}
          />
        }
      />
    </Container>
  );
}

function TeamMembersSection({ teamData }) {
  return (
    <Grid.Row>
      <Label primary pl={4} style={{ fontWeight: 'bold' }}>
        اعضای تیم:
      </Label>
      <List bulleted>
        {_.map(teamData.participants, (user) => {
          return (
            <List.Item
              key={user.id}
              style={{
                padding: '10px',
              }}
            >
              {user.user.first_name} {user.user.last_name} ({user.user.username})
            </List.Item>
          );
        })}
      </List>
    </Grid.Row>
  );
}

function TeamInvitationsSection({ invitations }) {
  if (_.isUndefined(invitations) || _.isEmpty(invitations)) {
    return;
  }
  return (
    <Grid.Row>
      <Label primary pl={4} style={{ fontWeight: 'bold' }}>
        درخواست‌های فرستاده شده:
      </Label>
      <List bulleted>
        {_.map(invitations, (invitation) => {
          return (
            <List.Item
              key={invitation.id}
              style={{
                padding: '10px',
              }}
            >
              {invitation.participant}
            </List.Item>
          );
        })}
      </List>
    </Grid.Row>
  );
}

export default function TeamInfo({ team, teamData, teamNameUpdate, finalize, addMember, token }) {
  return (
    <>
      <HeaderDiv finalized={team.finalized} />
      <Grid dir="RTL">
        <Grid.Column
          verticalAlign="middle"
          style={{
            marginTop: '20px',
            border: '1px solid #d1d1d1',
            borderRadius: '10px',
          }}
        >
          <Input
            kind={'changeName'}
            finalized={team.finalized}
            placeholder={'نام تیم'}
            label={'نام تیم'}
            defaultValue={teamData.name}
            buttonName={'تغییر نام'}
            func={teamNameUpdate}
            paddingLeft={'55px'}
            teamData={teamData}
            token={token}
          />

          <Divider />
          <TeamMembersSection teamData={teamData} />
          <Divider />
          <TeamInvitationsSection invitations={teamData.invitations} />
          <Divider />

          <Input
            kind={'addMember'}
            finalized={team.finalized}
            placeholder={'نام کاربری'}
            label={'عضو جدید'}
            defaultValue={''}
            buttonName={'اضافه کردن'}
            func={addMember}
            paddingLeft={'32px'}
            teamData={teamData}
            token={token}
          />
        </Grid.Column>
      </Grid>
    </>
  );
}
