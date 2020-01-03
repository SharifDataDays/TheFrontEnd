import React from 'react';
import { Button, Form, Header, Divider, Comment as CMT } from 'semantic-ui-react';
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

const CommentExampleMinimal = () => (
  <CMT.Group style={{ marginTop: '5rem', marginBottom: '5rem' }}>
    <Divider horizontal>
      <Header as='h3'>نظرات</Header>
    </Divider>
    <Form reply>
      <TextArea />
      <Button secondary positive style={{ marginBottom: '1rem' }}>
        ثبت نظر
      </Button>
    </Form>
    <GenerateComments data={samples} />
  </CMT.Group>
);

export default CommentExampleMinimal;
