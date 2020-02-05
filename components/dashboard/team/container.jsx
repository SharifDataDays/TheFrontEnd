import _ from 'lodash';
import styled from 'styled-components';
import { space, color, border } from 'styled-system';
import TeamInfo from './teamInfo';
import Invitations from './invitations';

const Container = styled.div`
  ${space}
  ${color}
  ${border}
`;

export default function ProfileContainer({ token, teamData }) {
  const finilized = false;

  return (
    <>
      <Container px={[4, 5, 6]} py={5} m={0}>
        <TeamInfo teamData={teamData} token={token} finilized={finilized} />
      </Container>
      <Container px={[4, 5, 6]} pb={5} m={0}>
        <Invitations />
      </Container>
    </>
  );
}
