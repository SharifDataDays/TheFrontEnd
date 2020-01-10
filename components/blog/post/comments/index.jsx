import React, { Component } from 'react';
import { Button, Form, Header, Divider, Comment as CMT, Grid } from 'semantic-ui-react';
import { typography } from 'styled-system';
import TextareaAutosize from 'react-autosize-textarea';
import styled from 'styled-components';
import Comment from './comment';
import Modal from './modal';

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

const GenerateComments = ({ data, isLoggedIn }) =>
  data.map((x) => <Comment {...x} isLoggedIn={isLoggedIn} />);

class CommentsPage extends Component {
  constructor (props) {
    super(props);
    this.reply = this.reply.bind(this);
    this.checkLoggedIn = this.checkLoggedIn.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = { open: false };
  }

  handleChange (event) {
    const { isLoggedIn } = this.props;
    if (!isLoggedIn) {
      this.setState({ open: true, value: '' });
      return;
    }
    this.setState({ value: event.target.value });
  }

  checkLoggedIn () {}

  reply () {
    // should handle post
    this.setState({});
  }

  closeModal () {
    this.setState({ open: false });
  }

  render () {
    const { open, value } = this.state;
    const { comments, isLoggedIn } = this.props;
    return (
      <Grid centered>
        <Grid.Column computer={7} tablet={10} mobile={15}>
          <CMT.Group style={{ marginTop: '5rem', marginBottom: '5rem' }}>
            <Modal open={open} handle={this.closeModal} />
            <Divider horizontal>
              <Header as='h3'>نظرات</Header>
            </Divider>
            <Form reply>
              <TextArea onClick={this.onInput} onChange={this.handleChange} value={value} />
              <Button
                secondary
                positive
                style={{ marginBottom: '1rem', marginRight: '95%', backgroundColor: '#21ba45' }}
              >
                ثبت
              </Button>
            </Form>
            <GenerateComments data={comments} isLoggedIn={isLoggedIn} />
          </CMT.Group>
        </Grid.Column>
      </Grid>
    );
  }
}

export default CommentsPage;
