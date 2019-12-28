import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Grid } from 'semantic-ui-react';
import LoginInput from '../input';
import LoginButton from '../button';
import check from './check';
import { loginAction } from '~/redux/actions/auth';

class LoginFields extends Component {
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
    this.setState((prevState) => {
      const res = check(prevState);
      if (res.problem) {
        const { notify } = this.props;
        notify(res.problem);
      } else {
        this.login();
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

  login() {
    const { username, password } = this.state;
    const { notify, login } = this.props;
    login(username, password);
  }

  render() {
    const { username, password, errors } = this.state;
    const { auth } = this.props;
    console.log(auth.loading);
    return (
      <Grid centered>
        <Grid.Column verticalAlign="middle">
          <Form onSubmit={this.onSubmit}>
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
            <Form.Field dir="rtl">
              <a href="/signup">عضو نیستید؟ حساب کاربری بسازید!</a>
            </Form.Field>
            <Form.Field dir="rtl">
              <a href="/forgot/email">فراموشی رمز عبور</a>
            </Form.Field>
            <LoginButton loading={auth.loading} type="submit" color="blue" text="ورود" />
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { auth } = state;
  return {
    auth,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    login: (username, password) => {
      dispatch(loginAction(username, password));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFields);
