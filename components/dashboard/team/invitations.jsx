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


export default function Invitations({ team, userInvitations, answerInvitation, token }) {
  if (_.isUndefined(userInvitations) || _.isEmpty(userInvitations)) {
    return;
  }
  return (
    <>
      <Header size="huge" dir="RTL">
        درخواست‌ها
      </Header>

      <Grid dir="RTL">
        <Grid.Column
          verticalAlign="middle"
          style={{
            marginTop: '20px',
           // border: '1px solid #d1d1d1',
           // borderRadius: '10px',
          }}
        >
          <Grid.Row>
            {_.map(userInvitations, (invitation) => {
              return (
                <>
                <Container
                  py={1}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  اضافه شدن به تیم {invitation.team}
                  <Container
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Form.Button
                      positive
                      content="قبول "
                      floated="right"
                      size="small"
                      disabled={team.finilized}
                      style={{ width: '60px' }}
                    />
                    <Form.Button
                      negative
                      content="رد"
                      floated="right"
                      size="small"
                      disabled={team.finilized}
                      style={{ width: '60px' }}
                    />
                  </Container>
                </Container>
                <Divider/>
                </>
              );
            })}
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </>
  );
}
