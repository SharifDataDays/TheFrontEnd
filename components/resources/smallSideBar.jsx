import React from 'react';
import { Header, Image, Menu, Ref, Segment, Sidebar } from 'semantic-ui-react';
import { render } from 'react-dom';
import styled from 'styled-components';

class SmallSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { visible } = this.state;
    const change = visible === true ? false : true;
    this.setState({ visible: change });
  }

  render() {
    const { visible } = this.state;
    return (
      <Sidebar.Pushable
        as={Segment.Group}
        raised
        onClick={this.handleClick}
        style={{ width: '100vw', margin: '0 auto' }}
      >
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          vertical
          visible={visible}
          direction="right"
          style={{ backgroundColor: '#f3f4f7', width: '55%' }}
          onClick={this.handleClick}
          width="thin"
        >
          <Menu.Item as="a" style={{ color: 'black' }} href="./resources">
            Home
          </Menu.Item>
          <Menu.Item as="a" style={{ color: 'black' }}>
            Games
          </Menu.Item>
          <Menu.Item as="a" style={{ color: 'black' }}>
            Channels
          </Menu.Item>
        </Sidebar>
        <div style={{ height: '100vh' }} />
      </Sidebar.Pushable>
    );
  }
}

export default SmallSideBar;
