import _ from 'lodash';
import styled from 'styled-components';
import { space, layout, color, border, typography,  } from 'styled-system';
import { Header, Tab, Button } from 'semantic-ui-react';
import { Fade } from 'react-reveal';
import Form from './form';
import { prof_fields, pass_fields } from './utils';

const panes = [
  {
    menuItem: 'مشخصات',
    render: (props) => (
      <Tab.Pane attached={false}>
        <Form
          profile={props.profile}
          profileData={props.profileData}
          token={props.token}
          update={props.update}
          fields={prof_fields}
        //  password_update={props.password_update}
          type="profile"
          options={props.options}
        />
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'رمز عبور',
    render: (props) => (
      <Tab.Pane attached={false}>
        <Form
          profile={props.profile}
          profileData={props.profileData}
          token={props.token}
          update={props.update}
          fields={pass_fields}
          password_update={props.password_update}
          type="password"
        />
      </Tab.Pane>
    ),
  },
];
const Container = styled.div`
  ${space}
  ${color}
  ${border}
`;

export default function ProfileContainer({
  password_update,
  clear,
  profile,
  profileData,
  token,
  update,
  options
}) {
  console.log(password_update)
  console.log(profileData)
  return (
    <Container
      px={[4, 5, 6]}
      py={4}
      m={0}
      backgroundColor="rgba(255, 255, 255, 0.3)"
      borderRadius={6}
    >
       <Container
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
            dir="RTL"
          >
      <Header size="huge" dir="RTL">
        پروفایل
      </Header>

      <Button secondary content="تیم من" floated="right" size="large" href="\dashboard\3\team" />
      </Container>
      <Fade up>
        <Tab
          dir="RTL"
          menu={{ secondary: true, pointing: true }}
          panes={panes}
          profile={profile}
          profileData={profileData}
          token={token}
          update={update}
          password_update={password_update}
          onTabChange={clear}
          options={options}
        />
      </Fade>
    </Container>
  );
}
