import React, { Component } from 'react';
import { Comment, Divider, Form, Button } from 'semantic-ui-react';
import Modal from './modal';

class CommentComp extends Component {
  constructor (props) {
    super(props);
    this.state = { displayReply: 'none', open: false, value: '' };
    this.toReply = this.toReply.bind(this);
    this.postReply = this.postReply.bind(this);
    this.closeReply = this.closeReply.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    const { isLoggedIn } = this.props;
    if (!isLoggedIn) {
      this.setState({ open: true });
      return;
    }
    this.setState({ value: event.target.value });
  }

  closeReply () {
    this.setState({ displayReply: 'none' });
  }

  toReply () {
    const { displayReply } = this.state;
    if (displayReply === 'block') {
      this.setState({ displayReply: 'none' });
      return;
    }
    this.setState({ displayReply: 'block' });
  }

  postReply () {
    this.closeReply();
    const { value } = this.state;
    if (value.trim() === '') {
      return;
    }
    const { name } = this.props;
    const message = name.concat(' : ').concat(value);
    alert(message);
  }

  closeModal () {
    this.setState({ open: false });
    this.closeReply();
  }

  render () {
    const { author, date, content, isReply = false } = this.props;
    const marginRight = isReply ? '2rem' : 'auto';
    const display = isReply ? 'none' : 'auto';
    const { displayReply, open, value } = this.state;
    return (
      <>
        <Divider style={{ display }} />
        <Comment style={{ marginRight }}>
          <Modal open={open} handle={this.closeModal} />
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
            <Form reply style={{ display: displayReply }} onClick={this.onInput}>
              <Form.TextArea
                style={{ height: '5em', direction: 'rtl' }}
                onChange={this.handleChange}
                value={value}
              />
              <Button
                secondary
                positive
                style={{
                  marginBottom: '1rem',
                  marginRight: '95%',
                  backgroundColor: '#21ba45',
                }}
                onClick={this.postReply}
              >
                ثبت
              </Button>
            </Form>
          </Comment.Content>
        </Comment>
      </>
    );
  }
}

export default CommentComp;
