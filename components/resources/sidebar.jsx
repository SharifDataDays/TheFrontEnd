import React, { Component, createRef } from 'react';
import { Rail, Ref, Sticky, Grid, Segment, Menu } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledMenu = styled(Menu)`
  direction: rtl !important;
  border-left: 0 !important;
  max-height: ${(props) => props.mh} !important;
  overflow-y: scroll !important;
  position: absolute !important;
  border-radius: 0 !important;
  background-color: #f3f4f7 !important;
  opacity: 0.75 !important;
`;

class StickySidebar extends Component {
  contextRef = createRef();

  constructor(props) {
    super(props);
    this.state = { maxHeight: '700px', size: 'huge' };
    this.handleStick = this.handleStick.bind(this);
    this.handleUnStick = this.handleUnStick.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    const size = window.innerWidth > 1200 ? 'huge' : '';
    this.setState({ size });
  }

  handleStick() {
    this.setState({ maxHeight: '100vh' });
  }

  handleUnStick() {
    this.setState({ maxHeight: '700px' });
  }

  updateDimensions() {
    const size = window.innerWidth > 1200 ? 'huge' : '';
    this.setState({ size });
  }

  render() {
    const { maxHeight } = this.state;
    const { size } = this.state;
    return (
      <Grid style={{ position: 'relative' }}>
        <Segment basic style={{ height: '1000px' }} />
        <Ref innerRef={this.contextRef}>
          <Segment basic>
            <Rail>
              <Sticky
                context={this.contextRef}
                onStick={this.handleStick}
                onUnstick={this.handleUnStick}
              >
                <StyledMenu vertical borderless mh={maxHeight} size={size}>
                  <Menu.Item>
                    <Menu.Header>Products</Menu.Header>
                    <Menu.Menu>
                      <Menu.Item link name="enterprise" onClick={this.handleItemClick} />
                      <Menu.Item link name="consumer" onClick={this.handleItemClick} />
                    </Menu.Menu>
                  </Menu.Item>

                  <Menu.Item>
                    <Menu.Header>CMS Solutions</Menu.Header>

                    <Menu.Menu>
                      <Menu.Item link name="rails" onClick={this.handleItemClick} />
                      <Menu.Item link name="python" onClick={this.handleItemClick} />
                      <Menu.Item link name="php" onClick={this.handleItemClick} />
                    </Menu.Menu>
                  </Menu.Item>

                  <Menu.Item>
                    <Menu.Header>Hosting</Menu.Header>

                    <Menu.Menu>
                      <Menu.Item link name="shared" onClick={this.handleItemClick} />
                      <Menu.Item link name="dedicated" onClick={this.handleItemClick} />
                    </Menu.Menu>
                  </Menu.Item>

                  <Menu.Item>
                    <Menu.Header>Support</Menu.Header>

                    <Menu.Menu>
                      <Menu.Item link name="email" onClick={this.handleItemClick}>
                        E-mail Support
                      </Menu.Item>

                      <Menu.Item link name="faq" onClick={this.handleItemClick}>
                        FAQs
                      </Menu.Item>
                    </Menu.Menu>
                  </Menu.Item>
                  <Menu.Item>
                    <Menu.Header>Products</Menu.Header>

                    <Menu.Menu>
                      <Menu.Item link name="enterprise" onClick={this.handleItemClick} />
                      <Menu.Item link name="consumer" onClick={this.handleItemClick} />
                    </Menu.Menu>
                  </Menu.Item>

                  <Menu.Item>
                    <Menu.Header>CMS Solutions</Menu.Header>

                    <Menu.Menu>
                      <Menu.Item link name="rails" onClick={this.handleItemClick} />
                      <Menu.Item link name="python" onClick={this.handleItemClick} />
                      <Menu.Item link name="php" onClick={this.handleItemClick} />
                    </Menu.Menu>
                  </Menu.Item>

                  <Menu.Item>
                    <Menu.Header>Hosting</Menu.Header>

                    <Menu.Menu>
                      <Menu.Item link name="shared" onClick={this.handleItemClick} />
                      <Menu.Item link name="dedicated" onClick={this.handleItemClick} />
                    </Menu.Menu>
                  </Menu.Item>

                  <Menu.Item>
                    <Menu.Header>Support</Menu.Header>

                    <Menu.Menu>
                      <Menu.Item link name="email" onClick={this.handleItemClick}>
                        E-mail Support
                      </Menu.Item>

                      <Menu.Item link name="faq" onClick={this.handleItemClick}>
                        FAQs
                      </Menu.Item>
                    </Menu.Menu>
                  </Menu.Item>
                </StyledMenu>
              </Sticky>
            </Rail>
          </Segment>
        </Ref>
      </Grid>
    );
  }
}

export default StickySidebar;
