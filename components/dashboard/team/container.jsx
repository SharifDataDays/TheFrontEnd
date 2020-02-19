import _ from 'lodash';
import styled from 'styled-components';
import { space, color, border } from 'styled-system';
import TeamInfo from './teamInfo';
import Invitations from './invitations';
import { Message, Header, Container as C, Button } from 'semantic-ui-react';
const Container = styled.div`
  ${space}
  ${color}
  ${border}
`;

export default function TeamContainer({
  token,
  team,
  teamData,
  userInvitations,
  teamNameUpdate,
  answerInvitation,
  addMember,
  finalize,
  rules,
  cid,
}) {
  let rules_container = <> </>;
  if (!_.isUndefined(rules) && rules !== '') {
    rules_container = (
      <Container py={3} my={3} dir="RTL">
        <Header size="huge" dir="RTL">
          قوانین
        </Header>
        <Container pr={3}>
          {rules.split('\n').map((item, i) => {
            return <p key={i}>{item}</p>;
          })}
        </Container>
      </Container>
    );
  }

  return (
    <Container px={[4, 5, 6]} mx={[0, 0, 4]}>
      {rules_container}
      <Container dir="RTL" pt={3} m={0}>
      <Message info hidden={teamData.name_finalized || team.finalized}>
          برای شرکت در مسابقه تیم خود را نهایی کنید.
        </Message>
        <Message hidden={!team.success} positive>
          تغییرات با موفقیت ذخیره شد.
        </Message>
        <Message hidden={!team.fail} negative>
          تغییرات بدون موفقیت ذخیره شد. ({team.errors.fa})
        </Message>
      </Container>

      <TeamInfo
        team={team}
        teamData={teamData}
        teamNameUpdate={teamNameUpdate}
        addMember={addMember}
        finalize={finalize}
        token={token}
        answerInvitation={answerInvitation}
      />

      <Invitations
        finalized={teamData.name_finalized || team.finalized}
        userInvitations={userInvitations}
        answerInvitation={answerInvitation}
        token={token}
      />

      <Container
        py={3}
        style={{
          alignContent: 'center',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'justify',
        }}
      >
        <a href={`/dashboard/${cid}/`}>
          <Button size="large">بازگشت</Button>
        </a>
      </Container>
    </Container>
  );
}
