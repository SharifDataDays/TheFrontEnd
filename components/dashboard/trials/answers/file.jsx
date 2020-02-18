// import _ from 'lodash';
import persianJs from 'persianjs';
import React, { Component } from 'react';
import { Form, Message, Button } from 'semantic-ui-react';
import Content from '~/components/global/mdx';

class FileAnswer extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const { id, qtype, changeAnswer } = this.props;
    const file = e.target.files[0];
    changeAnswer({
      id,
      qtype,
      number: 0,
      count: 1,
      value: e.target.files[0],
    });
  }

  render() {
    const { content, number, error } = this.props;
    // console.log('FILE');
    // console.log(this.props);

    return (
      <>
        <Content
          content={`سوال ${persianJs(number)
            .englishNumber()
            .toString()}. ${content}`}
        />
        <Form style={{ margin: '1rem auto' }}>
          <Form.Group
            width={2}
            dir="rtl"
            style={{
              display: 'flex',
              flexDirection: 'column',
              margin: '2px'
            }}
          >
            <input type="file" onChange={this.handleChange} />
            <Form.Input
              style={{
                display: 'none',
              }}
              error={error}
            />
          </Form.Group>
        </Form>
      </>
    );
  }
}

export default FileAnswer;
