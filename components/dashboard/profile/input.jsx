import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import styled from 'styled-components';
import { space, layout, color, border, typography } from 'styled-system';
import { DateInput } from 'semantic-ui-calendar-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

const Label = styled.label`
  ${space}
  ${layout}
  ${typography}
`;

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.field.date
        ? _.join(_.reverse(_.split(this.props.initial, '-')), '-')
        : this.props.initial,
    };
    this.handleChange = this.handleChange.bind(this);
    this.dateHandleChange = this.dateHandleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  dateHandleChange(event, { value }) {
    this.setState({
      value,
    });
  }

  render() {
    const { field, error } = this.props;
    const { value } = this.state;

    const labelWidth = '170px';

    if (field.date) {
      return (
        <Form.Group inline>
          <Label py={2} style={{ width: labelWidth }}>
            {field.fa}:
          </Label>
          <DateInput
            placeholder={field.fa}
            name={field.en}
            value={_.join(_.reverse(_.split(value, '-')), '-')}
            onChange={this.dateHandleChange}
            popupPosition="top center"
            closeOnMouseLeave={false}
            readOnly={field.readOnly}
            width={6}
            error={error}
            icon={<FontAwesomeIcon icon={faCalendar} color="black" />}
            hideMobileKeyboard
          />
        </Form.Group>
      );
    }
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
           transparent={field.readOnly}
        />
      </Form.Group>
    );
  }
}

export default Input;
