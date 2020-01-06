import _ from 'lodash';
import styled from 'styled-components';
import { space, layout, color, border, typography } from 'styled-system';
import { Header } from 'semantic-ui-react';
import { Fade } from 'react-reveal';
import Form from './form';

const Container = styled.div`
  ${space}
  ${color}
  ${border}
`;



export default function ProfileContainer({ profile, profileData, token, update }) {
  return (
    <Container
      px={[4, 5, 6]}
      py={5}
      m={0}
      backgroundColor="rgba(255, 255, 255, 0.3)"
      borderRadius={6}
    >
      <Header size="huge" dividing dir="RTL">
        پروفایل
      </Header>

      <Fade up>
        <Form profile={profile} profileData={profileData} token={token} update={update} />;
      </Fade>
    </Container>
  );
}
