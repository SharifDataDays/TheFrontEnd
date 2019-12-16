import React from 'react';
import { Menu, Segment, Sidebar } from 'semantic-ui-react';

class SmallSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true, height: '100vh' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { visible } = this.state;
    const { height } = this.state;
    const change = visible === true ? false : true;
    const changeHeight = height === '100vh' ? '5vh' : '100vh';
    this.setState({ visible: change, height: changeHeight });
  }

  render() {
    const { visible } = this.state;
    const { height } = this.state;
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
        <div style={{ height }} />
      </Sidebar.Pushable>
    );
  }
}

export default SmallSideBar;
