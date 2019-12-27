import axios from 'axios';
import React, { Component } from 'react';
import { Form, Grid } from 'semantic-ui-react';
import Input from '../../input';
import Button from '../../button';
import check from './check';
import { forgotAPI } from '~/redux/api/auth';

export default class ForgotFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      errors: {
        email: false,
      },
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.email = this.email.bind(this);
  }

  onSubmit() {
    this.setState((prevState) => {
      const res = check(prevState);
      if (res.problem) {
        const { notify } = this.props;
        notify(res.problem);
      } else {
        this.email();
      }
      return {
        errors: res.errors,
      };
    });
  }

  handleChange(event, { name, value }) {
    this.setState({
      [name]: value,
    });
  }

  email() {
    const { email } = this.state;
    const { notify } = this.props;
    axios.post(forgotAPI(), { email }).then((res) => {
      const serverData = res.data;
      if (serverData.status_code !== 200) {
        notify('emailNotExists');
      } else {
        notify('success');
      }
    });
  }

  render() {
    const { email, errors } = this.state;
    return (
      <Grid centered>
        <Grid.Column verticalAlign="middle">
          <Form>
            <Form.Group dir="rtl">
              <Input
                width={16}
                onChange={this.handleChange}
                name="email"
                label="ایمیل"
                value={email}
                error={errors.email}
              />
            </Form.Group>
            <Form.Field dir="rtl">
              <a href="/login">ورود</a>
            </Form.Field>
            <Button onClick={this.onSubmit} color="blue" text="ارسال ایمیل" />
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}
