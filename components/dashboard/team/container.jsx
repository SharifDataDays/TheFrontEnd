import _ from 'lodash';
import styled from 'styled-components';
import { space, layout, color, border, typography, flex } from 'styled-system';
import { Header, List, Input, Divider, Button, Grid, Form, Message } from 'semantic-ui-react';
import { Fade } from 'react-reveal';

const Label = styled.label`
  ${space}
  ${layout}
  ${typography}
`;

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
      borderRadius={6}
    >
      <Header size="huge" dir="RTL">
        تیم من
      </Header>
      <Divider />

      <Fade up>
        <Grid dir="RTL">
          <Grid.Column verticalAlign="middle" style={{
              borderRadius: '3px',
              border: ''
          }}>
            <Grid.Row>
              <Label pl={4}>نام تیم: </Label>
              <Input
                placeholder="نام تیم"
                defaultValue={teamData.name}
                disabled={finilized}
                transparent={finilized}
              />
            </Grid.Row>
            <Grid.Row
              style={{
                paddingTop: '15px',
              }}
            >
              اعضای تیم:
              <List bulleted>
                {_.map(teamData.participants, (user) => {
                  return (
                    <List.Item
                      key={user.id}
                      style={{
                        padding: '10px',
                      }}
                    >
                      {user.user.username} | {user.user.email}
                    </List.Item>
                  );
                })}
              </List>
              <Message hidden={true} positive>
                تغییرات با موفقیت ذخیره شد.
              </Message>
              <Message hidden={true} negative>
                تغییرات بدون موفقیت ذخیره شد.
              </Message>
              <Form.Button
                primary
                content="ذخیره‌ی تغییرات"
                floated="right"
                size="small"
                disabled={finilized}
              />
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </Fade>
    </Container>
  );
}
