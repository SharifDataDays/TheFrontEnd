import { Label, Header, Form, Popup } from 'semantic-ui-react';
import React from 'react';
import { Container } from './teamInfo';
export function HeaderDiv({ finalized, finalize, teamData, token, teamName }) {
  if (!finalized) {
    return (
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
              onClick={() => {
                const fields = {
                  name: teamName.state.value,
                  contest: teamData.contest,
                  finalize: true,
                };
                finalize(fields, token);
              }}
            />
          }
        />
      </Container>
    );
  } else {
    return (
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
        
        <Form.Button
          dir="RTL"
          primary
          content="تیم نهایی شده است"
          floated="right"
          size="big"
          disabled={true}
        />
      </Container>
    );
  }
}
