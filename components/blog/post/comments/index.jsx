import React, { Component } from 'react';
import { Button, Form, Header, Divider, Comment as CMT, Modal } from 'semantic-ui-react';
import { typography } from 'styled-system';
import TextareaAutosize from 'react-autosize-textarea';
import styled from 'styled-components';
import Comment from './comment';
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
  }

  reply () {
    // should handle post
    this.setState({});
  }

  checkLoggedIn () {}

  render () {
    return (
      <CMT.Group style={{ marginTop: '5rem', marginBottom: '5rem' }}>
        <Modal
          trigger={<Button>Show Modal</Button>}
          content={<Header as="a" href="." style={{float: 'right'}}>.برای ثبت نظر باید ورود کنید</Header>}
          actions={['Snooze', { key: 'done', content: 'Done', positive: true }]}
        />
        <Divider horizontal>
          <Header as='h3'>نظرات</Header>
        </Divider>
        <Form reply>
          <TextArea onInput={() => console.log('hello world')} />
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
