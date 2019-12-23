import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { changeAnswerAction } from '~/redux/actions/answers';

class Answer extends Component {
  constructor(props) {
    super(props);
    const { answers, question } = props;
    this.state = { value: answers[question] };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    const { changeValue } = this.props;
    this.setState({
      value: e.target.value,
    });
    changeValue(e.target.value);
  }

  render() {
    const { value } = this.state;
    return <Form.Field control={Input} value={value} onChange={this.onChange} {...this.props} />;
  }
}

function mapStateToProps(state, ownProps) {
  const { answers } = state;
  return {
    answers,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    changeValue: (value) => {
      dispatch(changeAnswerAction(ownProps.question, value));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Answer);
