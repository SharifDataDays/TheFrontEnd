/* eslint-disable camelcase */
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Form, Message } from 'semantic-ui-react';
import Button from '../button';
import Input from '../input';
import Date from './date';
import Terms from './terms';
import { signupAction } from '~/redux/actions/signup';

class SignUpFields extends Component {
  constructor(props) {
    super(props);
    this.state = { success: false };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const { signup, request } = this.props;
    const fields = {
      username: this.username.state.value,
      email: this.email.state.value,
      password_1: this.password_1.state.value,
      password_2: this.password_2.state.value,
      profile: {
        firstname_fa: this.firstname_fa.state.value,
        firstname_en: this.firstname_en.state.value,
        lastname_fa: this.lastname_fa.state.value,
        lastname_en: this.lastname_en.state.value,
        university: this.university.state.value,
        birth_date: _.join(_.reverse(_.split(this.birth_date.state.value, '-')), '-'),
      },
    };
    request(fields);
    if (signup.success) {
      this.setState({
        success: signup.success,
      });
    }
  }

  render() {
    const { terms, signup } = this.props;
    const { success } = this.state;
    const { errors } = signup;
    return (
      <Grid>
        <Grid.Column verticalAlign="middle">
          <Form onSubmit={this.onSubmit}>
            <Form.Group width={2} dir="rtl">
              <Input
                ref={(c) => {
                  this.firstname_fa = c;
                }}
                error={errors.firstname_fa}
                label="نام به فارسی"
              />
              <Input
                ref={(c) => {
                  this.lastname_fa = c;
                }}
                error={errors.lastname_fa}
                label="نام خانوادگی به فارسی"
              />
            </Form.Group>

            <Form.Group width={2} dir="rtl">
              <Input
                ref={(c) => {
                  this.firstname_en = c;
                }}
                error={errors.firstname_en}
                label="نام به انگلیسی"
              />
              <Input
                ref={(c) => {
                  this.lastname_en = c;
                }}
                error={errors.lastname_en}
                label="نام خانوادگی به انگلیسی"
              />
            </Form.Group>

            <Form.Group width={2} dir="rtl">
              <Input
                ref={(c) => {
                  this.university = c;
                }}
                error={errors.university}
                label="دانشگاه"
                width={8}
              />

              <Date
                ref={(c) => {
                  this.birth_date = c;
                }}
                error={errors.birth_date}
                label="تاریخ تولد"
              />
            </Form.Group>
            <Form.Group width={2} dir="rtl">
              <Input
                ref={(c) => {
                  this.username = c;
                }}
                error={errors.username}
                label="نام کاربری"
              />
              <Input
                ref={(c) => {
                  this.email = c;
                }}
                type="email"
                error={errors.email}
                label="ایمیل"
              />
            </Form.Group>

            <Form.Group width={2} dir="rtl">
              <Input
                ref={(c) => {
                  this.password_1 = c;
                }}
                type="password"
                error={errors.password_1}
                label="گذرواژه"
              />
              <Input
                ref={(c) => {
                  this.password_2 = c;
                }}
                type="password"
                error={errors.password_2}
                label="تکرار گذرواژه"
              />
            </Form.Group>
            <Form.Field dir="rtl">
              <Message visible={success} success>
                ایمیل تایید برای شما ارسال شد.
              </Message>
            </Form.Field>
            <Form.Field dir="rtl">
              <a href="/login">عضو هستید؟ وارد شوید!</a>
            </Form.Field>
            <Form.Field dir="rtl">
              <Terms terms={terms} />
            </Form.Field>
            <Button color="blue" text="موافقت با قوانین و ثبت نام" />
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { signup } = state;
  return {
    signup,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    request: (fields) => {
      dispatch(signupAction(fields));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpFields);
