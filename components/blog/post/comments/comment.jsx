import React from 'react';
import { Comment, Image } from 'semantic-ui-react';

const CommentExampleComment = ({ comment }) => (
  <Comment>
    <Image size="tiny" src={comment.image} />
    <Comment.Content>
      <Comment.Author as="a">{comment.name}</Comment.Author>
      <Comment.Metadata>
        <div>{comment.date}</div>
      </Comment.Metadata>
      <Comment.Text>{comment.content}</Comment.Text>
      <Comment.Actions>
        <Comment.Action>Reply</Comment.Action>
      </Comment.Actions>
    </Comment.Content>
  </Comment>
);

export default CommentExampleComment;
