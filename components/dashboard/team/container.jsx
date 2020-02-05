import _ from 'lodash';
import styled from 'styled-components';
import { space, color, border} from 'styled-system';
import TeamInfo from './teamInfo';


const Container = styled.div`
  ${space}
  ${color}
  ${border}
`;


export default function ProfileContainer({ token, teamData }) {
  const finilized = false;

  return (
    <Container
      px={[4, 5, 6]}
      py={5}
      m={0}
      backgroundColor="rgba(255, 255, 255, 0.3)"
    >
    <TeamInfo teamData={teamData} token={token} finilized={finilized}/>
    </Container>
  );
}
