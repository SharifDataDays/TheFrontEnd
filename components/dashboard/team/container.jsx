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
  teamInvitations,
  teamNameUpdate,
  finalize,
  answerInvitation,
  addMember,
}) {
  return (
    <>
      <Container dir="RTL" px={[4, 5, 6]} pt={3} m={0}>
        <Message hidden={!team.success} positive>
          تغییرات با موفقیت ذخیره شد.
        </Message>
        <Message hidden={!team.fail} negative>
          تغییرات بدون موفقیت ذخیره شد.
        </Message>
      </Container>
      <Container px={[4, 5, 6]} py={3} m={0}>
        <TeamInfo
          team={team}
          teamData={teamData}
          teamNameUpdate={teamNameUpdate}
          finalize={finalize}
          addMember={addMember}
          token={token}
        />
      </Container>
      <Container px={[4, 5, 6]} py={4} m={0}>
        <Invitations
          team={team}
          userInvitations={userInvitations}
          answerInvitation={answerInvitation}
          token={token}
        />
      </Container>
    </>
  );
}
