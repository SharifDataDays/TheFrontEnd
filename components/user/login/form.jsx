import _ from 'lodash';
import React, { Component } from 'react';
import { Form as F, Grid, Button, Message } from 'semantic-ui-react';
import Input from '../input';

class Form extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const { auth, login } = this.props;
    login(this.username.state.value, this.password.state.value);
  }

  render() {
    const { auth } = this.props;
    const { errors } = auth;
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
                error={errors.username}
              />
              <Input
                ref={(c) => {
                  this.password = c;
                }}
                label="گذرواژه"
                type="password"
                error={errors.password}
              />
            </F.Group>
            <F.Field dir="rtl">
              <Message hidden={_.isEmpty(errors)} negative>
                <p>
                  مشخصات وارد شده صحیح نمی‌باشد.
                </p>
                <p>
                  نام کاربری و کلمه‌ی عبور به کوچکی و بزرگی حروف حساس هستند.
                </p>
              </Message>
            </F.Field>
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

export default Form;
