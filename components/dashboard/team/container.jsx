import _ from 'lodash';
import styled from 'styled-components';
import { space, layout, color, border, typography } from 'styled-system';
import { Header, List, Input, Divider, Button } from 'semantic-ui-react';
import { Fade } from 'react-reveal';

const Container = styled.div`
  ${space}
  ${color}
  ${border}
`;

export default function ProfileContainer({ token, teamData }) {
  {
    console.log(teamData);
  }
  return (
    <Container
      px={[4, 5, 6]}
      py={5}
      m={0}
      backgroundColor="rgba(255, 255, 255, 0.3)"
      borderRadius={6}
    >
      <Header size="huge" dir="RTL">
        تیم من
      </Header>
      <Divider />
      <List dir="RTL">
        <List.Item>
          <Input
            placeholder="نام تیم"
            defaultValue={teamData.name}
            label="نام تیم"
            action={{
              content: 'ذخیره‌ی تغییرات',
            }}
          />
        </List.Item>
        <List.Item>
          اعضای تیم:
          <List bulleted>
            {_.map(teamData.participants, (user) => {
              return <List.Item key={user.id}>{user.user.username}</List.Item>;
            })}
          </List>
        </List.Item>
      </List>
      <Fade up></Fade>
    </Container>
  );
}
