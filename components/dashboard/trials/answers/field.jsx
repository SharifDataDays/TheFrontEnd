import _ from 'lodash';
import persianJs from 'persianjs';
import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import Content from '~/components/global/mdx';

class FieldAnswer extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const { id, qtype, count, changeAnswer } = this.props;
    changeAnswer({
      id,
      qtype,
      count,
      number: e.target.name,
      value: e.target.value,
    });
  }

  render() {
    const { content, number, count, type, saved } = this.props;
    return (
      <>
        <Content
          content={`سوال ${persianJs(number)
            .englishNumber()
            .toString()}. ${content}`}
        />
        <Form>
          <Form.Group width={2} dir="rtl">
            {_.map(_.range(count), (i) => {
              return (
                <Form.Input
                  key={i}
                  name={i}
                  value={_.get(saved, `n${i}`, '')}
                  type={type}
                  width={8}
                  onChange={this.handleChange}
                />
              );
            })}
          </Form.Group>
        </Form>
      </>
    );
  }
}

export default FieldAnswer;
