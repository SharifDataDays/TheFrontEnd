import React, { Component } from 'react';
import { Button, Form, Grid, Icon } from 'semantic-ui-react';
import LoginInput from '../loginSignup/input';
import LoginButton from '../loginSignup/button';

export default class LoginFields extends Component {
  render() {
    return (
      <Grid centered>
        <Grid.Column verticalAlign="middle">
          <Form>
            <Form.Group width={2} dir="rtl">
              <LoginInput name="email" label="ایمیل" type="email" />
              <LoginInput name="password" label="گذرواژه" type="password" />
            </Form.Group>

            <LoginButton color="blue" text="ورود" />
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

