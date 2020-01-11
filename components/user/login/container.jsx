import React from 'react';
import { Header } from 'semantic-ui-react';
import Container from '../container';
import Form from './form';

function LoginContainer({ auth, login }) {
  return (
    <Container>
      <Header dividing as="h1">
        ورود
      </Header>
      <Form auth={auth} login={login} />
    </Container>
  );
}

export default LoginContainer;
