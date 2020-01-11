import _ from 'lodash';
import styled from 'styled-components';
import { space, layout, color, border, typography } from 'styled-system';
import { Header, Tab } from 'semantic-ui-react';
import { Fade } from 'react-reveal';
import Form from './form';
import {prof_fields, pass_fields} from './utils';

const panes = [

  
  {
    menuItem: 'پروفایل',
    render: (props) => (
      <Tab.Pane attached={false}>
        <Form
          profile={props.profile}
          profileData={props.profileData}
          token={props.token}
          update={props.update}
          fields={prof_fields}
          type="profile"
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

export default function ProfileContainer({ profile, profileData, token, update }) {
  console.log(profile);
  return (
    <Container
      px={[4, 5, 6]}
      py={5}
      m={0}
      backgroundColor="rgba(255, 255, 255, 0.3)"
      borderRadius={6}
    >
      {/* <Header size="huge" dividing dir="RTL">
        پروفایل
      </Header> */}

      <Fade up>
        <Tab
          dir="RTL"
          menu={{ secondary: true, pointing: true }}
          panes={panes}
          profile={profile}
          profileData={profileData}
          token={token}
          update={update}
        />
      </Fade>
    </Container>
  );
}
