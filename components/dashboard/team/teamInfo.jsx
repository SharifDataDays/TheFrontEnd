import _ from 'lodash';
import styled from 'styled-components';
import { space, layout, color, border, typography, flex } from 'styled-system';
import { List, Divider, Button, Grid, Message } from 'semantic-ui-react';
import React, { Component } from 'react';

import Input from './input';
import { HeaderDiv } from './HeaderDiv';

const Label = styled.label`
  ${space}
  ${layout}
  ${typography}
  ${color}
`;

export const Container = styled.div`
  ${space}
  ${color}
  ${border}
`;

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
    return <></>;
  }
  return (
    <>
     <Divider />
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
     
    </>
  );
}

export default class TeamInfo extends Component {
  constructor(props) {
    super(props);
    this.teamName = this.props.teamData.name;
  }

  render() {
    const { team, teamData, teamNameUpdate, addMember, token, finalize } = this.props;
    const fin = teamData.name_finalized || team.finalized;
    return (
      <>
        <HeaderDiv finalized={fin} finalize={finalize} teamData={teamData} token={token} teamName={this.teamName} />
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
              ref={(c) => {
                this.teamName = c;
              }}
              kind={'changeName'}
              finalized={fin}
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
            
            <TeamInvitationsSection invitations={teamData.invitations} />

            <Input
              kind={'addMember'}
              finalized={fin}
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
}
