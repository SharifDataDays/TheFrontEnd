import React, { Component } from 'react';
import { Comment, Divider, Form, Button } from 'semantic-ui-react';

class CommentComp extends Component {
  constructor (props) {
    super(props);
    this.state = { displayReply: 'none' };
    this.toReply = this.toReply.bind(this);
    this.doneReply = this.doneReply.bind(this);
  }

  toReply () {
    const { displayReply } = this.state;
    if (displayReply === 'block') return this.doneReply();
    this.setState({ displayReply: 'block' });
  }

  doneReply () {
    // post data
    this.setState({ displayReply: 'none' });
  }

  render () {
    const { author, date, content, isReply = false } = this.props;
    const marginRight = isReply ? '2rem' : 'auto';
    const display = isReply ? 'none' : 'auto';
    const { displayReply } = this.state;
    return (
      <>
        <Divider style={{ display }} />
        <Comment style={{ marginRight }}>
          <Comment.Content>
            <Comment.Author as='a' style={{ float: 'right' }}>
              {author}
            </Comment.Author>
            <Comment.Metadata>
              <span>{date}</span>
            </Comment.Metadata>
            <Comment.Text
              style={{ display: 'flex', justifyContent: 'flex-end', textAlign: 'right' }}
            >
              {content}
            </Comment.Text>
            <Comment.Actions style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <a onClick={this.toReply}>پاسخ دادن</a>
            </Comment.Actions>
            <Form reply style={{ display: displayReply }}>
              <Form.TextArea style={{ height: '5em', direction: 'rtl' }} />
              <Button secondary positive style={{ marginBottom: '1rem' }} onClick={this.doneReply}>
                ثبت پاسخ
              </Button>
            </Form>
          </Comment.Content>
        </Comment>
      </>
    );
  }
}

export default CommentComp;
