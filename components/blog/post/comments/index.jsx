// @flow
import _ from 'lodash';
import React, { Component } from 'react';
import type { Node } from 'react';
import styled from 'styled-components';
import { shadow, typography } from 'styled-system';
import { Box } from 'rebass/styled-components';
import TextareaAutosize from 'react-autosize-textarea';
import { ClipLoader } from 'react-spinners';
import { Button, Comment, Form, Header } from 'semantic-ui-react';
// import Comment from './comment';

const ShadowedBox = styled(Box)`
  ${shadow};
`;

const TextArea = styled(TextareaAutosize)`
  ${typography};
  width: 100%;
  height: 100%;
  outline: 0;
  border: 0;
  resize: none;
  direction: auto;
`;

const sampleComments = [
  {
    image:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80',
    name: 'John Doe',
    content:
      'A iaculis at erat pellentesque. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Duis ultricies lacus sed turpis tincidunt id aliquet. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat. Bibendum at varius vel pharetra vel. Augue lacus viverra vitae congue eu consequat ac felis donec.',
    date: '1 day ago',
  },
  {
    image:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80',
    name: 'John Doe',
    content:
      'A iaculis at erat pellentesque. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Duis ultricies lacus sed turpis tincidunt id aliquet. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat. Bibendum at varius vel pharetra vel. Augue lacus viverra vitae congue eu consequat ac felis donec.',
    date: '1 day ago',
  },
];

/* class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = { comments: [], loaded: 0, loading: false };
    this.loadComments = this.loadComments.bind(this);
  }

  loadComments(e) {
    e.preventDefault();
    this.setState({ loading: true });
    const { comments, loaded } = this.state;
    this.setState({
      comments: _.concat(comments, sampleComments),
      loaded: loaded + sampleComments.length,
      loading: false,
    });
  }

  render(): Node {
    const { count } = this.props;
    const { loading, comments, loaded } = this.state;

    return (
      <Box width={1} textAlign="center">
        <ShadowedBox mb={4} p={3} bg="background" boxShadow={0}>
          <TextArea fontSize={3} placeholder="Write a comment..." />
        </ShadowedBox>
        {loading ? (
          <>
            {comments.map((comment) => {
              return <Comment comment={comment} />;
            })}
            <ClipLoader sizeUnit="px" size={30} color="#000" loading={loading} />
          </>
        ) : (
          <>
            {comments.map((comment) => {
              return <Comment comment={comment} />;
            })}
            <Box onClick={this.loadComments}>
              {loaded < count ? <Button primary>Load Comments</Button> : <></>}
            </Box>
          </>
        )}
      </Box>
    );
  }
} */

const CommentExampleComment = () => (
  <Comment.Group>
    <Header as="h3" dividing>
      Comments
    </Header>

    <Comment>
      <Comment.Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80" />
      <Comment.Content>
        <Comment.Author as="a">Matt</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>How artistic!</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Comment>
      <Comment.Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80" />
      <Comment.Content>
        <Comment.Author as="a">Elliot Fu</Comment.Author>
        <Comment.Metadata>
          <div>Yesterday at 12:30AM</div>
        </Comment.Metadata>
        <Comment.Text>
          <p>This has been very useful for my research. Thanks as well!</p>
        </Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
      <Comment.Group>
        <Comment>
          <Comment.Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80" />
          <Comment.Content>
            <Comment.Author as="a">Jenny Hess</Comment.Author>
            <Comment.Metadata>
              <div>Just now</div>
            </Comment.Metadata>
            <Comment.Text>Elliot you are always so right :)</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </Comment>

    <Comment>
      <Comment.Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80" />
      <Comment.Content>
        <Comment.Author as="a">Joe Henderson</Comment.Author>
        <Comment.Metadata>
          <div>5 days ago</div>
        </Comment.Metadata>
        <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Form reply>
      <Form.TextArea />
      <Button content="Add Reply" labelPosition="left" icon="edit" primary />
    </Form>
  </Comment.Group>
);

export default CommentExampleComment;

// export default Comments;
