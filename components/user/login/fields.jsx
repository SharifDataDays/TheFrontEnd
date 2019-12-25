import axios from 'axios';
import React, { Component } from 'react';
import { Form, Grid } from 'semantic-ui-react';
import LoginInput from '../input';
import LoginButton from '../button';
import check from './check';
import { loginAPI } from '~/redux/api/auth';
import { login } from '~/redux/utils/auth';

export default class LoginFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {
        username: false,
        password: false,
      },
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }

  onSubmit() {
    const res = check(this.state);
    this.setState({
      errors: res.newErrors,
    });
    if (res.problem) {
      const { notify } = this.props;
      notify(res.problem);
    } else {
      this.login();
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  login() {
    const { username, password } = this.state;
    const { notify } = this.props;
    axios.post(loginAPI(), { username, password }).then((res) => {
      if (!res.data.access) {
        this.setState({
          errors: {
            username: true,
            password: true,
          },
        });
        notify('unathenticated');
      } else {
        login(res);
      }
    });
  }

  render() {
    const { username, password } = this.state;
    const { errors } = this.state;
    return (
      <Grid centered>
        <Grid.Column verticalAlign="middle">
          <Form>
            <Form.Group width={2} dir="rtl">
              <LoginInput
                onChange={this.handleChange}
                name="username"
                label="نام کاربری"
                value={username}
                error={errors.username}
              />
              <LoginInput
                onChange={this.handleChange}
                name="password"
                label="گذرواژه"
                type="password"
                value={password}
                error={errors.password}
              />
            </Form.Group>

            <LoginButton onClick={this.onSubmit} color="blue" text="ورود" />
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}
