import _ from 'lodash';
import styled from 'styled-components';
import { space, color, border } from 'styled-system';
import TeamInfo from './teamInfo';
import Invitations from './invitations';
import { Message, Header, Container as C } from 'semantic-ui-react';
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
}) {
  if (_.isUndefined(rules) || rules === "")
    rules =
      'مخاطبان این چالش، دانشجویان سال دوم کارشناسی تا سال آخر کارشناسی ارشد هستند و  با تشکیل تیم،‌ شما می‌پذیرید که این موارد را رعایت فرمایید:\n\
      - تمام اعضای تیم‌‌ها باید اشخاص حقیقی و دانشجوی سال دوم کارشناسی تا پایان کارشناسی ارشد باشند.\n\
      - مدل ارائه شده برای حل مسئله، باید دقیقا حاصل کار سه نفر عضو تیم باشد و اعضا باید به اخلاقی بودن کد خود پایبند باشند.\n\
      - دریافت جایزه نهایی منوط به حضور هر سه عضو تیم در محل دانشگاه صنعتی شریف و ارائه مدل در روز اختتامیه خواهد بود.\n\
      - در هر مرحله از فرایند برگزاری چالش که خلاف این قوانین درخصوص تیمی احراز شود، آن تیم از ادامه حضور در رقابت‌ نهایی محروم خواهند شد. \n\
      - شرکت کنندگان باید با مفاهیم گا‌م‌های آموزشی رویداد آشنایی نسبی داشته باشند. محتوای آموزشی رویداد همچنان در دسترس شما خواهد بود.';
  return (
    <>
      <Container px={[4, 5, 6]} py={3} my={3} mx={[0, 0, 4]} dir="RTL">
        <Header size="huge" dir="RTL">
          قوانین
        </Header>
        <Container pr={3}>
          {rules.split('\n').map((item, i) => {
            return <p key={i}>{item}</p>;
          })}
        </Container>
      </Container>
      <Container dir="RTL" px={[4, 5, 6]} pt={3} m={0} mx={[0, 0, 4]}>
        <Message hidden={!team.success} positive>
          تغییرات با موفقیت ذخیره شد.
        </Message>
        <Message hidden={!team.fail} negative>
          تغییرات بدون موفقیت ذخیره شد. ({team.errors.fa})
        </Message>
      </Container>

      <Container px={[4, 5, 6]} py={3} m={0} mx={[0, 0, 4]}>
        <TeamInfo
          team={team}
          teamData={teamData}
          teamNameUpdate={teamNameUpdate}
          addMember={addMember}
          finalize={finalize}
          token={token}
        />
      </Container>
      <Container px={[4, 5, 6]} pt={5} pb={4} m={0} mx={[0, 0, 4]}>
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
