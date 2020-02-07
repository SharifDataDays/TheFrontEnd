import React, { Component } from 'react';
import { Form, Dropdown } from 'semantic-ui-react';
import styled from 'styled-components';
import { space, layout, color, border, typography } from 'styled-system';
import { addUniAPI } from '~/redux/api/signup';

const Label = styled.label`
  ${space}
  ${layout}
  ${typography}
`;

class DropdownInput extends Component {
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
    const labelWidth = '170px';
    console.log(value);
    return (
      <Form.Group inline>
        <Label py={2} style={{ width: labelWidth }}>
          {field.fa}:
        </Label>
        <Dropdown
          options={this.state.options}
          placeholder={field.fa}
          search
          selection
          //   fluid
          width={6}
          error={error}
          readOnly={field.readOnly}
          allowAdditions={this.props.allowAdd}
          value={value}
          name={field.en}
          onAddItem={this.handleAddition}
          onChange={this.handleChange}
        />
      </Form.Group>
    );
  }
}

export default DropdownInput;
