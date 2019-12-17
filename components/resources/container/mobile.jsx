import React, { Component } from 'react';
import { Container, Icon, Menu, Responsive, Segment, Sidebar } from 'semantic-ui-react';
import Content from '~/components/global/mdx';

const getWidth = () => {
  const isSSR = typeof window === 'undefined';

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children, content } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        getWidth={getWidth}
        as={Sidebar.Pushable}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <>
            <Menu.Item>
              <Menu.Header>Products</Menu.Header>
              <Menu.Menu>
                <Menu.Item name="enterprise" />
                <Menu.Item name="consumer" />
              </Menu.Menu>
            </Menu.Item>

            <Menu.Item>
              <Menu.Header>CMS Solutions</Menu.Header>

              <Menu.Menu>
                <Menu.Item name="rails" />
                <Menu.Item name="python" />
                <Menu.Item name="php" />
              </Menu.Menu>
            </Menu.Item>

            <Menu.Item>
              <Menu.Header>Hosting</Menu.Header>

              <Menu.Menu>
                <Menu.Item name="shared" />
                <Menu.Item name="dedicated" />
              </Menu.Menu>
            </Menu.Item>

            <Menu.Item>
              <Menu.Header>Support</Menu.Header>

              <Menu.Menu>
                <Menu.Item name="email">E-mail Support</Menu.Item>

                <Menu.Item name="faq">FAQs</Menu.Item>
              </Menu.Menu>

              <Menu.Header>Products</Menu.Header>

              <Menu.Menu>
                <Menu.Item name="enterprise" />
                <Menu.Item name="consumer" />
              </Menu.Menu>
            </Menu.Item>

            <Menu.Item>
              <Menu.Header>CMS Solutions</Menu.Header>

              <Menu.Menu>
                <Menu.Item name="rails" />
                <Menu.Item name="python" />
                <Menu.Item name="php" />
              </Menu.Menu>
            </Menu.Item>

            <Menu.Item>
              <Menu.Header>Hosting</Menu.Header>

              <Menu.Menu>
                <Menu.Item name="shared" />
                <Menu.Item name="dedicated" />
              </Menu.Menu>
            </Menu.Item>

            <Menu.Item>
              <Menu.Header>Support</Menu.Header>

              <Menu.Menu>
                <Menu.Item name="email">E-mail Support</Menu.Item>

                <Menu.Item name="faq">FAQs</Menu.Item>
              </Menu.Menu>
            </Menu.Item>
          </>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Menu pointing>
            <Menu.Item onClick={this.handleToggle}>
              <Icon name="sidebar" />
            </Menu.Item>
          </Menu>
          <Content content={content} />
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

export default MobileContainer;
