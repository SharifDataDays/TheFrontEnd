import React, { Component } from 'react';
import { DateInput } from 'semantic-ui-calendar-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

class Date extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, { value }) {
    this.setState({
      value,
    });
  }

  render() {
    const { value } = this.state;
    const { error, label } = this.props;
    return (
      <DateInput
        popupPosition="top center"
        closeOnMouseLeave={false}
        icon={<FontAwesomeIcon icon={faCalendar} color="black" />}
        iconPosition="right"
        label={label}
        value={value}
        error={error}
        onChange={this.handleChange}
        width={8}
      />
    );
  }
}

export default Date;
