import React from 'react';
import { Comment, Divider } from 'semantic-ui-react';

const CommentComp = ({ author, date, content, isReply = false }) => {
  const marginRight = isReply ? '2rem' : 'auto';
  const display = isReply ? 'none' : 'auto';
  return (
    <>
      <Comment style={{ marginRight }}>
        <Comment.Content>
          <Comment.Author as='a' style={{ float: 'right' }}>
            {author}
          </Comment.Author>
          <Comment.Metadata>
            <span>{date}</span>
          </Comment.Metadata>
          <Comment.Text style={{ display: 'flex', justifyContent: 'flex-end', textAlign: 'right' }}>
            {content}
          </Comment.Text>
          <Comment.Actions style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <a>پاسخ دادن</a>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
      <Divider style={{ display }} />
    </>
  );
};

export default CommentComp;
