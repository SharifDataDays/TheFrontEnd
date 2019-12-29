import React from 'react';
import { connect } from 'react-redux';
import { Header, Dimmer } from 'semantic-ui-react';
import { ClipLoader } from 'react-spinners';
import Container from '../container';
import Form from './form';

function LoginContainer({ auth }) {
  return (
    <>
      <Dimmer active={auth.loading}>
        <ClipLoader size={75} color="#fff" loading={auth.loading} />
      </Dimmer>
      <Container>
        <Header dividing as="h1">
          ورود
        </Header>
        <Form />
      </Container>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  const { auth } = state;
  return {
    auth,
  };
}

export default connect(mapStateToProps)(LoginContainer);
