import React, { Component } from 'react';
import { Button, Modal, Header } from 'semantic-ui-react';
import styled from 'styled-components';

const Text = styled.p`
  text-align: center;
  font-size 1.5rem;
`;

const Alert = ({ open, handle }) => (
  <Modal basic open={open}>
    <Header as='h1' content='ثبت نظر' style={{ paddingBottom: '0', textAlign: 'center' }} />
    <Modal.Content>
      <Text>برای ثبت نظر باید در سایت  <a href="/test"> وارد شوید </a></Text>
    </Modal.Content>
    <Modal.Actions style={{ display: 'flex', justifyContent: 'center' }}>
      <Button color='green' inverted onClick={handle}>
        فهمیدم
      </Button>
    </Modal.Actions>
  </Modal>
);

export default Alert;
