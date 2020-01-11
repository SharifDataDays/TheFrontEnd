// import _ from 'lodash';
import persianJs from 'persianjs';
import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
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
    const { content, number } = this.props;
    return (
      <>
        <Content
          content={`سوال ${persianJs(number)
            .englishNumber()
            .toString()}. ${content}`}
        />
        <Form>
          <Form.Group width={2} dir="rtl">
            <input type="file" onChange={this.handleChange} />
          </Form.Group>
        </Form>
      </>
    );
  }
}

export default FileAnswer;
