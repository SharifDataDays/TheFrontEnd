import _ from 'lodash';
import styled from 'styled-components';
import { space, color, border } from 'styled-system';
import TeamInfo from './teamInfo';
import Invitations from './invitations';
import { Message } from 'semantic-ui-react';
const Container = styled.div`
  ${space}
  ${color}
  ${border}
`;

export default function ProfileContainer({
  token,
  team,
  teamData,
  userInvitations,
  teamNameUpdate,
  answerInvitation,
  addMember,
  finalize,
}) {
  let error = '';
  if (!_.isUndefined(team.errors.non_field_errors) && !_.isEmpty(team.errors.non_field_errors)) {
    error = team.errors.non_field_errors;
  }
  if (error === '' && team.fail) {
    error = 'فیلد نباید خالی باشد';
  }



  return (
    <>
      <Container dir="RTL" px={[4, 5, 6]} pt={3} m={0}>
        <Message hidden={!team.success} positive>
          تغییرات با موفقیت ذخیره شد.
        </Message>
        <Message hidden={!team.fail} negative>
          تغییرات بدون موفقیت ذخیره شد. ({error})
        </Message>
      </Container>

      <Container px={[4, 5, 6]} py={3} m={0}>
        <TeamInfo
          team={team}
          teamData={teamData}
          teamNameUpdate={teamNameUpdate}
          addMember={addMember}
          finalize={finalize}
          token={token}
        />
      </Container>
      <Container px={[4, 5, 6]} pt={5} pb={4} m={0}>
        <Invitations
          finalized={teamData.name_finalized || team.finalized}
          userInvitations={userInvitations}
          answerInvitation={answerInvitation}
          token={token}
        />
      </Container>
    </>
  );
}
