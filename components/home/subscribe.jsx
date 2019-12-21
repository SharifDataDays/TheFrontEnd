import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Header, Modal, Input } from 'semantic-ui-react';

const Segment = styled.div`
  position: absolute;
  color: #1d93f7;
  top: 90vh;
  right: 5vh;
  font-size: 1.5rem;
  &:hover {
    cursor: pointer;
  }
`;

class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
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

  render() {
    const { modalOpen } = this.state;

    return (
      <Modal
        trigger={<Segment onClick={this.handleOpen}>اشتراک در اخبار</Segment>}
        open={modalOpen}
        onClose={this.handleClose}
        basic
        size="small"
      >
        <div dir="RTL">
          <Header style={{ color: 'white' }} content="اشتراک در اخبار" />
          <Modal.Content>
            <Input style={{ width: '100%' }} placeholder="ایمیل" />
          </Modal.Content>
          <Modal.Actions style={{ marginTop: '1rem' }}>
            <Button onClick={this.handleClose} basic color="red" inverted>
              لغو
            </Button>
            <Button onClick={this.handleClose} color="green" inverted>
              اشتراک
            </Button>
          </Modal.Actions>
        </div>
      </Modal>
    );
  }
}

export default Subscribe;
