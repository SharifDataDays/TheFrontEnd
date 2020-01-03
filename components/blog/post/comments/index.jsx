import React, { Component } from 'react';
import { Button, Form, Header, Divider, Comment as CMT } from 'semantic-ui-react';
import { typography } from 'styled-system';
import TextareaAutosize from 'react-autosize-textarea';
import styled from 'styled-components';
import Comment from './comment';
import Modal from './modal';
import samples from '~/public/static/comments-test.json';

const TextArea = styled(TextareaAutosize)`
  ${typography};
  width: 100%;
  height: 100%;
  outline: 0;
  border: 0;
  resize: none;
  direction: rtl;
  margin-bottom: 1rem !important;
`;

const GenerateComments = ({ data }) => data.map((x) => <Comment {...x} />);

class CommentsPage extends Component {
  constructor (props) {
    super(props);
    this.reply = this.reply.bind(this);
    this.checkLoggedIn = this.checkLoggedIn.bind(this);
    this.onInput = this.onInput.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = { open: false };
  }

  onInput () {
    this.setState({ open: true });
  }

  checkLoggedIn () {}

  reply () {
    // should handle post
    this.setState({});
  }

  closeModal () {
    this.setState({ open: false });
  }

  render () {
    const { open } = this.state;
    return (
      <CMT.Group style={{ marginTop: '5rem', marginBottom: '5rem' }}>
        <Modal open={open} handle={this.closeModal} />
        <Divider horizontal>
          <Header as='h3'>نظرات</Header>
        </Divider>
        <Form reply>
          <TextArea onInput={this.onInput} onClick={this.onInput} />
          <Button secondary positive style={{ marginBottom: '1rem' }}>
            ثبت نظر
          </Button>
        </Form>
        <GenerateComments data={samples} />
      </CMT.Group>
    );
  }
}

export default CommentsPage;
