import _ from 'lodash';
import persianJs from 'persianjs';
import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import Content from '~/components/global/mdx';

class FieldAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = _.reduce(
      _.range(props.count),
      (result, value) => {
        return Object.assign(result, { [value]: '' });
      },
      {},
    );
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { content, number, count, type } = this.props;
    return (
      <>
        <Content
          content={`سوال ${persianJs(number)
            .englishNumber()
            .toString()}. ${content}`}
        />
        <Form>
          <Form.Group width={2} dir="rtl">
            {_.map(_.range(count), (i) => (
              <Form.Input key={i} name={i} type={type} width={8} onChange={this.handleChange} />
            ))}
          </Form.Group>
        </Form>
      </>
    );
  }
}

export default FieldAnswer;
