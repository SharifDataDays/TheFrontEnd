// @flow
import React, { Component } from 'react';
import type { Node } from 'react';
import { Box } from 'rebass/styled-components';
import { FilledButton } from '~/components/global/buttons';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = { comments: [], loaded: 0 };
    this.loadComments = this.loadComments.bind(this);
  }

  loadComments(e) {
    e.preventDefault();
  }

  render(): Node {
    const { count } = this.props;

    return (
      <Box width={1} textAlign="center">
        {count === 0 ? (
          <></>
        ) : (
          <Box onClick={this.loadComments}>
            <FilledButton text="Load Comments" />
          </Box>
        )}
      </Box>
    );
  }
}

export default Comments;
