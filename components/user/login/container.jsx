import React from 'react';
import { Header, Dimmer } from 'semantic-ui-react';
import { ClipLoader } from 'react-spinners';
import Container from '../container';
import Form from './form';

function LoginContainer({ auth, login }) {
  return (
    <>
      <Dimmer active={auth.loading}>
        <ClipLoader size={75} color="#fff" loading={auth.loading} />
      </Dimmer>
      <Container>
        <Header dividing as="h1">
          ورود
        </Header>
        <Form auth={auth} login={login} />
      </Container>
    </>
  );
}

export default LoginContainer;
