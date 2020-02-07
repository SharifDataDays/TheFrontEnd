import React, { Component } from 'react';
import { Form, Dropdown, Grid, Select } from 'semantic-ui-react';
import styled from 'styled-components';
import { space, layout, color, border, typography } from 'styled-system';
import { addUniAPI } from '~/redux/api/signup';

const Label = styled.label`
  ${space}
  ${layout}
  ${typography}
`;

class SignupDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.initial,
      options: this.props.options,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (e, { value }) => this.setState({ value: value });

  handleAddition = (e, { value }) => {
    this.setState((prevState) => ({
      options: [{ key: value, text: value, value }, ...prevState.options],
    }));
    if (this.props.field.en === 'uni') {
      addUniAPI({ name: value });
    }
  };

  render() {
    let { field, error } = this.props;
    const { value } = this.state;

    return (
      <Form.Select
        width={8}
        options={this.state.options}
        fluid
        label={field.fa}
        placeholder='انتخاب کنید'
        onAddItem={this.handleAddition}
        onChange={this.handleChange}
        allowAdditions={this.props.allowAdd}
        error={error}
        value={value}
      />

    );
  }
}

export default SignupDropdown;
