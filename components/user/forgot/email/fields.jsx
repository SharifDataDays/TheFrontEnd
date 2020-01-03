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
      errors: {
        email: false,
      },
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }

  onSubmit() {
    const { notify } = this.props;
    const res = check({ email: this.email.state.value });
    if (res.problem) {
      notify(res.problem);
    } else {
      this.sendEmail();
    }
    this.setState({
      errors: res.errors,
    });
  }

  sendEmail() {
    const { notify } = this.props;
    forgotAPI(this.email.state.value).then((res) => {
      const serverData = res.data;
      if (serverData.status_code !== 200) {
        notify('emailNotExists');
      } else {
        notify('success');
      }
    });
  }

  render() {
    const { errors } = this.state;
    return (
      <Grid centered>
        <Grid.Column verticalAlign="middle">
          <Form>
            <Form.Group dir="rtl">
              <Input
                ref={(c) => {
                  this.email = c;
                }}
                width={16}
                label="ایمیل"
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
