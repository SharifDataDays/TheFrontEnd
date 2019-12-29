import React from 'react';
import { connect } from 'react-redux';
import { Header, Dimmer } from 'semantic-ui-react';
import { ClipLoader } from 'react-spinners';
import Container from '../container';
import Form from './form';

function SignupContainer({ terms, signup }) {
  return (
    <>
      <Dimmer active={signup.loading}>
        <ClipLoader size={75} color="#fff" loading={signup.loading} />
      </Dimmer>
      <Container>
        <Header as="h1" dividing>
          ثبت نام
        </Header>
        <Form terms={terms} />
      </Container>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  const { signup } = state;
  return {
    signup,
  };
}

export default connect(mapStateToProps)(SignupContainer);
