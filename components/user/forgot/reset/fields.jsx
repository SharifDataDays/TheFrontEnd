import React, { Component } from 'react';
import { Form, Grid } from 'semantic-ui-react';
import Input from '../../input';
import Button from '../../button';
import check from './check';
import { resetAPI } from '~/redux/api/auth';

export default class ForgotFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {
        password_1: false,
        password_2: false,
      },
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.reset = this.reset.bind(this);
  }

  onSubmit() {
    const { notify } = this.props;
    const res = check({
      password_1: this.password_1.state.value,
      password_2: this.password_2.state.value,
    });
    if (res.problem) {
      notify(res.problem);
    } else {
      this.reset();
    }
    this.setState({
      errors: res.errors,
    });
  }

  reset() {
    const { uid, token, notify } = this.props;
    resetAPI({
      uid,
      token,
      new_password1: this.password_1.state.value,
      new_password2: this.password_2.state.value,
    }).then((res) => {
      const serverData = res.data;
      if (serverData.status_code !== 200) {
        if (serverData.email) {
          notify('tokenNotValid');
        }
        if (serverData.new_password2) {
          notify('commonPassword');
        }
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
            <Form.Group width={2} dir="rtl">
              <Input
                ref={(c) => {
                  this.password_1 = c;
                }}
                type="password"
                label="گذرواژه"
                error={errors.password_1}
              />
              <Input
                ref={(c) => {
                  this.password_2 = c;
                }}
                label="تکرار گذرواژه"
                type="password"
                error={errors.password_2}
              />
            </Form.Group>
            <Form.Field dir="rtl">
              <a href="/login">ورود</a>
            </Form.Field>
            <Button onClick={this.onSubmit} color="blue" text="تغییر رمز" />
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}
