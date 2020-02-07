/* eslint-disable camelcase */
import _ from 'lodash';
import React, { Component } from 'react';
import { Grid, Form as F, Message, Button } from 'semantic-ui-react';
import Input from '../input';
import Date from './date';
import Terms from './terms';
import SignupDropdown from '~/components/user/signup/signupDropdown.jsx';
import { getUniversities } from '~/components/dashboard/profile/dropdownOptions.jsx';

class Form extends Component {
  constructor(props) {
    super(props);
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
  }

  render() {
    const { terms, signup, options } = this.props;
    const { success, errors } = signup;
    return (
      <Grid>
        <Grid.Column verticalAlign="middle">
          <F onSubmit={this.onSubmit}>
            <F.Group width={2} dir="rtl">
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
            </F.Group>

            <F.Group width={2} dir="rtl">
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
            </F.Group>

            <F.Group width={2} dir="rtl">
              <SignupDropdown
                field={{
                  en: 'uni',
                  fa: 'دانشگاه',
                  readOnly: false,
                  dropdown: true,
                }}
                allowAdd={'uni' !== 'bmp'}
                options={options.universities}
              />

              <Date
                ref={(c) => {
                  this.birth_date = c;
                }}
                error={errors.birth_date}
                label="تاریخ تولد"
              />
            </F.Group>
            <F.Group width={2} dir="rtl">
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
            </F.Group>

            <F.Group width={2} dir="rtl">
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
            </F.Group>
            <F.Group width={2} dir="rtl">
              <SignupDropdown
                field={{
                  en: 'bmp',
                  fa: 'مقطع تحصیلی',
                  readOnly: false,
                  dropdown: true
                }}
                allowAdd={'bmp' !== 'bmp'}
                options={options.BMPs}
              />
              <SignupDropdown
                field={{
                  en: 'major',
                  fa: 'رشته‌ی تحصیلی',
                  readOnly: false,
                  dropdown: true
                }}
                allowAdd={'major' !== 'bmp'}
                options={options.fields}
              />
            </F.Group>

            <F.Field dir="rtl">
              <Message hidden={!success} positive>
                ایمیل تایید برای شما ارسال شد.
              </Message>
            </F.Field>
            <F.Field dir="rtl">
              <a href="/login">عضو هستید؟ وارد شوید!</a>
            </F.Field>
            <F.Field dir="rtl">
              <Terms terms={terms} />
            </F.Field>
            <Button type="submit" primary>
              موافقت با قوانین و ثبت نام
            </Button>
          </F>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Form;
