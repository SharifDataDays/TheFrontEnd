import _ from 'lodash';
import styled from 'styled-components';
import { space, layout, color, border, typography, flex } from 'styled-system';
import {
  Header,
  List,
  Input,
  Divider,
  Button,
  Grid,
  Form,
  Message,
  Popup,
} from 'semantic-ui-react';
import { Fade } from 'react-reveal';

const Label = styled.label`
  ${space}
  ${layout}
  ${typography}
  ${color}
`;

const Container = styled.div`
  ${space}
  ${color}
  ${border}
`;

const Text = styled.text`
  ${color}
`;

export default function TeamInfo({ token, teamData, finilized }) {
  return (
    <>
      <Container
        style={{
          display: 'flex',
          flexDirection: 'row-reverse',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: '20px',
        }}
      >
        <Header size="huge" dir="RTL" floated="left">
          تیم من
        </Header>
        <Popup
          dir="RTL"
          position="right center"
          content="پس از ثبت نهایی امکان تغییر نام و اعضا وجود ندارد!"
          inverted
          trigger={
            <Form.Button
              primary
              inverted
              content="ثبت نهایی"
              floated="right"
              size="big"
              disabled={finilized}
            />
          }
        />
      </Container>

      <Grid dir="RTL">
        <Grid.Column
          verticalAlign="middle"
          style={{
            marginTop: '20px',
            border: '1px solid #d1d1d1',
            borderRadius: '10px',
          }}
        >
          <Grid.Row>
            <Container
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Container>
                <Label primary pl={4} style={{ fontWeight: 'bold', paddingLeft: '55px' }}>
                  نام تیم:
                </Label>
                <Input
                  placeholder="نام تیم"
                  defaultValue={teamData.name}
                  disabled={finilized}
                  transparent={finilized}
                />
              </Container>
              <Form.Button
                primary
                content="تغییر نام"
                floated="right"
                size="small"
                disabled={finilized}
              />
            </Container>
            <Divider />
          </Grid.Row>

          <Grid.Row>
            <Label primary pl={4} style={{ fontWeight: 'bold' }}>
              اعضای تیم:
            </Label>
            <List bulleted>
              {_.map(teamData.participants, (user) => {
                return (
                  <List.Item
                    key={user.id}
                    style={{
                      padding: '10px',
                    }}
                  >
                    {user.user.first_name} {user.user.last_name} ({user.user.username})
                  </List.Item>
                );
              })}
            </List>
          </Grid.Row>

          <Grid.Row hidden={finilized}>
            <Divider />
            <Container
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Container>
                <Label primary pl={4} style={{ fontWeight: 'bold', width: '250px' }}>
                  عضو جدید:
                </Label>
                <Input placeholder="نام کاربری" disabled={finilized} transparent={finilized} />
              </Container>
              <Form.Button
                primary
                content="اضافه کردن"
                floated="right"
                size="small"
                disabled={finilized}
              />
            </Container>
          </Grid.Row>
          <Grid.Row>
            <Message hidden={true} positive>
              تغییرات با موفقیت ذخیره شد.
            </Message>
            <Message hidden={true} negative>
              تغییرات بدون موفقیت ذخیره شد.
            </Message>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </>
  );
}
