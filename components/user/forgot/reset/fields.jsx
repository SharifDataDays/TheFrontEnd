import axios from 'axios';
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
      password_1: '',
      password_2: '',
      errors: {
        password_1: false,
        password_2: false,
      },
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.reset = this.reset.bind(this);
  }

  onSubmit() {
    this.setState((prevState) => {
      const res = check(prevState);
      if (res.problem) {
        const { notify } = this.props;
        notify(res.problem);
      } else {
        this.reset();
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

  reset() {
    const { password_1, password_2 } = this.state;
    const { uid, token, notify } = this.props;
    axios
      .post(resetAPI(), { uid, token, new_password1: password_1, new_password2: password_2 })
      .then((res) => {
        const serverData = res.data;
        console.log(serverData);
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
    const { password_1, password_2 } = this.state;
    const { errors } = this.state;
    return (
      <Grid centered>
        <Grid.Column verticalAlign="middle">
          <Form>
            <Form.Group width={2} dir="rtl">
              <Input
                onChange={this.handleChange}
                name="password_1"
                type="password"
                label="گذرواژه"
                value={password_1}
                error={errors.password_1}
              />
              <Input
                onChange={this.handleChange}
                name="password_2"
                label="تکرار گذرواژه"
                type="password"
                value={password_2}
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
