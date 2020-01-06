import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import styled from 'styled-components';
import { space, layout, color, border, typography } from 'styled-system';

const Label = styled.label`
  ${space}
  ${layout}
  ${typography}
`;

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.initial };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    const { field, error } = this.props;
    const { value } = this.state;

    console.log(field)
    console.log(error)
    console.log(value)
    return (
      <Form.Group inline>
        <Label py={2} style={{ width: labelWidth }}>
          {field.fa}:
        </Label>
        <Form.Input
          placeholder={field.fa}
          name={field.en}
          value={value}
          onChange={this.handleChange}
          readOnly={field.readOnly}
          width={6}
          error={error}
          type={field.pass === true ? 'password' : 'none'}
          // transparent={field.readOnly}
        />
      </Form.Group>
    );
  }
}

export default Input;
