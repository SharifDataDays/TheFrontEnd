import React, { createRef, Component } from 'react';
import { Grid, Segment, Ref, Menu, Rail, Sticky } from 'semantic-ui-react';

function filterHeaders(content) {
  const h1Headers = /# .+/g;
  const headers1 = content.match(h1Headers);
  let headersH1 = null;
  if (headers1 !== null) {
    headersH1 = headers1.map((x) => x.split(' ')[1]);
  }
  return { h1: headersH1 };
}

class Headers extends Component {
  contextRef = createRef();

  render() {
    const { content } = this.props;
    const allHeaders = filterHeaders(content);
    const headers1 = allHeaders.h1.map((x) => <Menu.Item as="a" href="./resources" name={x} />);

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
                    borderRadius: '0',
                    backgroundColor: '#f3f4f7',
                    opacity: '0.75',
                  }}
                >
                  {headers1}
                </Menu>
              </Sticky>
            </Rail>
          </Segment>
        </Ref>
      </Grid>
    );
  }
}

export default Headers;
