import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    const { error, type, label, width } = this.props;
    const { value } = this.state;
    return (
      <Form.Input
        style={{ marginBottom: 10 }}
        error={error}
        type={type}
        value={value}
        label={label}
        width={width || 8}
        onChange={this.handleChange}
      />
    );
  }
}

export default Input;
