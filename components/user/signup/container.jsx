import React from 'react';
import { Header } from 'semantic-ui-react';
import Container from '../container';
import Form from './form';

function SignupContainer({ terms, signup, request, options}) {
  return (
    <Container>
      <Header as="h1" dividing>
        ثبت نام
      </Header>
      <Form request={request} signup={signup} terms={terms} options={options}/>
    </Container>
  );
}

export default SignupContainer;
