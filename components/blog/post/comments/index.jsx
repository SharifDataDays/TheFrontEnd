import React from 'react';
import { Button, Form, Header, Divider, Comment as CMT } from 'semantic-ui-react';
import Comment from './comment';
import samples from '~/public/static/comments-test.json';

const GenerateComments = ({ data }) => samples.map((x) => <Comment {...x} />);

const CommentExampleMinimal = () => (
  <CMT.Group style={{ marginTop: '5rem', marginBottom: '5rem' }}>
    <Divider horizontal>
      <Header as='h3'>نظرات</Header>
    </Divider>
    <Form reply>
      <Form.TextArea />
      <Button secondary positive style={{ marginBottom: '1rem' }}>
        ثبت نظر
      </Button>
    </Form>
    <GenerateComments data={samples} />
  </CMT.Group>
);

export default CommentExampleMinimal;
