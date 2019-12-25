import React, { Component } from 'react';
import { Button, Form, Grid, Icon } from 'semantic-ui-react';
import LoginInput from '../loginSignup/input';
import LoginButton from '../loginSignup/button';
import { preReqCheck, reqLogin } from '../../redux/utils/login';
import { storeAccessToken, storeRefreshToken } from '../../redux/utils/auth';

export default class LoginFields extends Component {
  state = {
    username: '',
    password: '',
    errors: {
      username: false,
      password: false,
    },
  };

  login = () => {
    reqLogin(this.state.username, this.state.password).then((res) => {
      if (!res.data.access) {
        this.setState({
          errors : {
            username : true,
            password : true
          }
        })
        this.props.notify('unathenticated')
      } else {
        console.log(res.data.access)
        console.log(res.data.refresh)
        storeAccessToken(res.data.access)
        storeRefreshToken(res.data.refresh)
      }
    });
  };

  onSubmit = async () => {
    let res = preReqCheck(this.state);
    this.setState({ errors: res.newErrors });
    if (res.problem) {
      this.props.notify(res.problem);
    } else {
      this.login()
    }
  };

  handleChange = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  };

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
