import _ from 'lodash';
import persianJs from 'persianjs';
import React, { Component } from 'react';
import { Form, Radio, Checkbox } from 'semantic-ui-react';
import Content from '~/components/global/mdx';

class ChoiceAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = { value: [] };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, { value }) {
    e.preventDefault();
    const { count } = this.props;
    const currentValue = this.state.value;
    let newValue;
    if (count === 1) {
      newValue = [value];
    } else if (_.includes(currentValue, value)) {
      newValue = _.filter(currentValue, (choice) => choice !== value);
    } else {
      newValue = _.concat(currentValue, value);
    }
    this.setState({
      value: newValue,
    });
  }

  render() {
    const { content, number, count, choices } = this.props;
    const { value } = this.state;
    return (
      <>
        <Content
          content={`سوال ${persianJs(number)
            .englishNumber()
            .toString()}. ${content}`}
        />
        <Form>
          <Form.Group width={2} dir="rtl">
            {_.map(choices, (choice, i) => (
              <Form.Field
                key={i}
                name={i}
                label={choice.body}
                value={choice.label}
                checked={_.includes(value, choice.label)}
                control={count === 1 ? Radio : Checkbox}
                width={8}
                onChange={this.handleChange}
              />
            ))}
          </Form.Group>
        </Form>
      </>
    );
  }
}

export default ChoiceAnswer;
