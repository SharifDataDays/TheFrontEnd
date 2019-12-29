import _ from 'lodash';
import Router from 'next/router';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form as F, Grid, Button } from 'semantic-ui-react';
import Input from '../input';
import { loginAction } from '~/redux/actions/auth';

class Form extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const { auth, login } = this.props;
    login(this.username.state.value, this.password.state.value);
    if (_.isEmpty(auth.errors)) {
      Router.push('/dashboard/tasks', '/dashboard/tasks', { shallow: false });
    }
  }

  render() {
    const { auth } = this.props;
    return (
      <Grid centered>
        <Grid.Column verticalAlign="middle">
          <F onSubmit={this.onSubmit}>
            <F.Group width={2} dir="rtl">
              <Input
                ref={(c) => {
                  this.username = c;
                }}
                label="نام کاربری"
                error={auth.errors ? auth.errors.username : ''}
              />
              <Input
                ref={(c) => {
                  this.password = c;
                }}
                label="گذرواژه"
                type="password"
                error={auth.errors ? auth.errors.password : ''}
              />
            </F.Group>
            <F.Field dir="rtl">
              <a href="/signup">عضو نیستید؟ حساب کاربری بسازید!</a>
            </F.Field>
            <F.Field dir="rtl">
              <a href="/forgot/email">فراموشی رمز عبور</a>
            </F.Field>
            <Button type="submit" primary>
              ورود
            </Button>
          </F>
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

export default connect(mapStateToProps, mapDispatchToProps)(Form);
