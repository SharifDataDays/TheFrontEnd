import axios from 'axios';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Header, Modal, Input } from 'semantic-ui-react';
import { subscribeAPI } from '~/redux/api/home';

const Segment = styled(Button)`
  position: absolute;
  top: 80%;
  right: 50%;
  transform: translateX(50%);
`;

class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', modalOpen: false };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOpen() {
    this.setState({
      modalOpen: true,
    });
  }

  handleClose() {
    this.setState({
      modalOpen: false,
    });
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  handleSubmit() {
    const { value } = this.state;
    axios
      .post(subscribeAPI(), {
        email: value,
      })
      .then((res) => {
        this.setState({
          modalOpen: false,
        });
      })
      .catch((err) => {
        this.setState({
          modalOpen: false,
        });
      });
  }

  render() {
    const { modalOpen } = this.state;

    return (
      <Modal
        trigger={
          <Segment primary onClick={this.handleOpen}>
            اشتراک در خبرنامه
          </Segment>
        }
        textAlign="center"
        open={modalOpen}
        onClose={this.handleClose}
        basic
        size="small"
      >
        <div dir="RTL">
          <Header style={{ color: 'white' }} content="اشتراک در خبرنامه" />
          <Modal.Content>
            <Input onChange={this.handleChange} style={{ width: '100%' }} placeholder="ایمیل" />
          </Modal.Content>
          <Modal.Actions style={{ marginTop: '1rem' }}>
            <Button onClick={this.handleClose} basic color="red" inverted>
              لغو
            </Button>
            <Button onClick={this.handleSubmit} color="green" inverted>
              اشتراک
            </Button>
          </Modal.Actions>
        </div>
      </Modal>
    );
  }
}

export default Subscribe;
