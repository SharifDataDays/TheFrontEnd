// @flow
import _ from 'lodash';
import React, { Component } from 'react';
import type { Node } from 'react';
import { Box, Heading } from 'rebass/styled-components';
import { ClipLoader } from 'react-spinners';
import Comment from './comment';
import { FilledButton } from '~/components/global/buttons';

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

class Comments extends Component {
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

    if (count === 0) {
      return (
        <Box width={1} textAlign="center">
          <Heading>No Comments.</Heading>
        </Box>
      );
    }
    if (loading) {
      return (
        <Box width={1} textAlign="center">
          <Box onClick={this.loadComments}>
            {comments.map((comment) => {
              return <Comment comment={comment} />;
            })}
            <ClipLoader sizeUnit="px" size={30} color="#000" loading={loading} />
          </Box>
        </Box>
      );
    }
    return (
      <Box width={1} textAlign="center">
        <Box onClick={this.loadComments}>
          {comments.map((comment) => {
            return <Comment comment={comment} />;
          })}
          {loaded < count ? <FilledButton text="Load Comments" /> : <></>}
        </Box>
      </Box>
    );
  }
}

export default Comments;
