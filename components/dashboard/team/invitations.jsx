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

function accept(invitation, answerInvitation, token) {
  const fields = {
    id: invitation.id,
    accept: true,
    contest_id: invitation.contest_id,
  };
  answerInvitation(fields, token);
}

function reject(invitation, answerInvitation, token) {
  const fields = {
    id: invitation.id,
    accept: false,
    contest_id: invitation.contest_id,
  };
  answerInvitation(fields, token);
}

export default function Invitations({ finalized, userInvitations, answerInvitation, token }) {
  if (finalized || _.isUndefined(userInvitations) || _.isEmpty(userInvitations)) {
    return <></>;
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
                        style={{ width: '60px' }}
                        onClick={() => {
                          accept(invitation, answerInvitation, token);
                        }}
                      />
                      <Form.Button
                        negative
                        content="رد"
                        floated="right"
                        size="small"
                        style={{ width: '60px' }}
                        onClick={() => {
                          reject(invitation, answerInvitation, token);
                        }}
                      />
                    </Container>
                  </Container>
                  <Divider />
                </>
              );
            })}
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </>
  );
}
