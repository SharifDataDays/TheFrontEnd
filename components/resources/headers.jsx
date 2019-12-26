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
    const headers = allHeaders.h1.map((x) => (
      <Menu.Item as="a" href="./resources" name={x} style={{ color: 'black' }} />
    ));

    return (
      <Grid style={{ position: 'relative' }}>
        <Segment style={{ height: '1000px' }} basic borderless />
        <Ref innerRef={this.contextRef}>
          <Segment basic borderless>
            <Rail style={{ width: '400px' }}>
              <Sticky context={this.contextRef}>
                <Menu
                  inverted
                  pointing
                  vertical
                  style={{ backgroundColor: '#fff', borderRadius: '0' }}
                >
                  {headers}
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
