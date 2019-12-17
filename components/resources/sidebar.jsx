import React, { Component, createRef } from 'react';
import { Rail, Ref, Sticky, Grid, Segment, Menu } from 'semantic-ui-react';

class StickySidebar extends Component {
  contextRef = createRef();

  render() {
    return (
      <Grid style={{ position: 'relative' }}>
        <Segment style={{ height: '1000px', paddingRight: '0', paddingLeft: '0', border: '0' }} />
        <Ref innerRef={this.contextRef}>
          <Segment style={{ paddingRight: '0', paddingLeft: '0', border: '0' }}>
            <Rail style={{ width: '400px' }}>
              <Sticky context={this.contextRef}>
                <Menu
                  vertical
                  style={{
                    direction: 'rtl',
                    borderLeft: '0',
                    maxHeight: '700px',
                    overflowY: 'scroll',
                    position: 'absolute',
                    width: '23vw',
                    borderRadius: '0',
                    backgroundColor: '#f3f4f7',
                    opacity: '0.75',
                  }}
                >
                  <Menu.Item>
                    <Menu.Header>Products</Menu.Header>
                    <Menu.Menu>
                      <Menu.Item name="enterprise" onClick={this.handleItemClick} />
                      <Menu.Item name="consumer" onClick={this.handleItemClick} />
                    </Menu.Menu>
                  </Menu.Item>

                  <Menu.Item>
                    <Menu.Header>CMS Solutions</Menu.Header>

                    <Menu.Menu>
                      <Menu.Item name="rails" onClick={this.handleItemClick} />
                      <Menu.Item name="python" onClick={this.handleItemClick} />
                      <Menu.Item name="php" onClick={this.handleItemClick} />
                    </Menu.Menu>
                  </Menu.Item>

                  <Menu.Item>
                    <Menu.Header>Hosting</Menu.Header>

                    <Menu.Menu>
                      <Menu.Item name="shared" onClick={this.handleItemClick} />
                      <Menu.Item name="dedicated" onClick={this.handleItemClick} />
                    </Menu.Menu>
                  </Menu.Item>

                  <Menu.Item>
                    <Menu.Header>Support</Menu.Header>

                    <Menu.Menu>
                      <Menu.Item name="email" onClick={this.handleItemClick}>
                        E-mail Support
                      </Menu.Item>

                      <Menu.Item name="faq" onClick={this.handleItemClick}>
                        FAQs
                      </Menu.Item>
                    </Menu.Menu>

                    <Menu.Header>Products</Menu.Header>

                    <Menu.Menu>
                      <Menu.Item name="enterprise" onClick={this.handleItemClick} />
                      <Menu.Item name="consumer" onClick={this.handleItemClick} />
                    </Menu.Menu>
                  </Menu.Item>

                  <Menu.Item>
                    <Menu.Header>CMS Solutions</Menu.Header>

                    <Menu.Menu>
                      <Menu.Item name="rails" onClick={this.handleItemClick} />
                      <Menu.Item name="python" onClick={this.handleItemClick} />
                      <Menu.Item name="php" onClick={this.handleItemClick} />
                    </Menu.Menu>
                  </Menu.Item>

                  <Menu.Item>
                    <Menu.Header>Hosting</Menu.Header>

                    <Menu.Menu>
                      <Menu.Item name="shared" onClick={this.handleItemClick} />
                      <Menu.Item name="dedicated" onClick={this.handleItemClick} />
                    </Menu.Menu>
                  </Menu.Item>

                  <Menu.Item>
                    <Menu.Header>Support</Menu.Header>

                    <Menu.Menu>
                      <Menu.Item name="email" onClick={this.handleItemClick}>
                        E-mail Support
                      </Menu.Item>

                      <Menu.Item name="faq" onClick={this.handleItemClick}>
                        FAQs
                      </Menu.Item>
                    </Menu.Menu>
                  </Menu.Item>
                </Menu>
              </Sticky>
            </Rail>
          </Segment>
        </Ref>
      </Grid>
    );
  }
}

export default StickySidebar;
