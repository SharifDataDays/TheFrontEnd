/* eslint-disable camelcase */
import _ from 'lodash';
import axios from 'axios';
import React, { Component } from 'react';
import { Grid, Form } from 'semantic-ui-react';
import { DateInput } from 'semantic-ui-calendar-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import Input from '../input';
import Button from '../button';
import check from './check';
import Terms from './terms';
import { signupAPI } from '~/redux/api/auth';

export default class SignUpFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname_fa: '',
      lastname_fa: '',
      firstname_en: '',
      lastname_en: '',
      username: '',
      email: '',
      birth_date: '',
      university: '',
      password_1: '',
      password_2: '',
      errors: {
        firstname_fa: false,
        lastname_fa: false,
        firstname_en: false,
        lastname_en: false,
        username: false,
        email: false,
        birth_date: false,
        university: false,
        password: false,
        confirmPassword: false,
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    this.setState((prevState) => {
      const res = check(prevState);
      if (res.problem) {
        const { notify } = this.props;
        notify(res.problem);
      } else {
        this.signup();
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

  signup() {
    const {
      username,
      email,
      password_1,
      password_2,
      firstname_fa,
      firstname_en,
      lastname_fa,
      lastname_en,
      birth_date,
      university,
    } = this.state;
    const { notify } = this.props;

    const data = {
      username,
      email,
      password_1,
      password_2,
      profile: {
        firstname_fa,
        firstname_en,
        lastname_fa,
        lastname_en,
        university,
        birth_date: _.join(_.reverse(_.split(birth_date, '-')), '-'),
      },
    };

    axios.post(signupAPI(), data).then((res) => {
      const serverData = res.data;
      if (serverData.status_code !== 200) {
        if (serverData.username) {
          notify('usernameExists');
        }
        if (serverData.email) {
          notify('emailExists');
        }
      } else {
        notify('success');
      }
    });
  }

  render() {
    const {
      firstname_fa,
      lastname_fa,
      firstname_en,
      lastname_en,
      username,
      email,
      birth_date,
      university,
      password_1,
      password_2,
      errors,
    } = this.state;
    const { terms } = this.props;

    return (
      <Grid>
        <Grid.Column verticalAlign="middle">
          <Form>
            <Form.Group width={2} dir="rtl">
              <Input
                name="firstname_fa"
                onChange={this.handleChange}
                value={firstname_fa}
                error={errors.firstname_fa}
                label="نام به فارسی"
              />
              <Input
                name="lastname_fa"
                onChange={this.handleChange}
                value={lastname_fa}
                error={errors.lastname_fa}
                label="نام خانوادگی به فارسی"
              />
            </Form.Group>

            <Form.Group width={2} dir="rtl">
              <Input
                name="firstname_en"
                onChange={this.handleChange}
                value={firstname_en}
                error={errors.firstname_en}
                label="نام به انگلیسی"
              />
              <Input
                name="lastname_en"
                onChange={this.handleChange}
                value={lastname_en}
                error={errors.lastname_en}
                label="نام خانوادگی به انگلیسی"
              />
            </Form.Group>

            <Form.Group width={2} dir="rtl">
              <Input
                name="university"
                onChange={this.handleChange}
                value={university}
                error={errors.university}
                label="دانشگاه"
                width={8}
              />

              <DateInput
                label="تاریخ تولد"
                name="birth_date"
                popupPosition="top center"
                closeOnMouseLeave="false"
                icon={<FontAwesomeIcon icon={faCalendar} color="black" />}
                iconPosition="right"
                value={birth_date}
                error={errors.birth_date}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group width={2} dir="rtl">
              <Input
                onChange={this.handleChange}
                name="username"
                value={username}
                error={errors.username}
                label="نام کاربری"
              />
              <Input
                onChange={this.handleChange}
                name="email"
                value={email}
                type="email"
                error={errors.email}
                label="ایمیل"
              />
            </Form.Group>

            <Form.Group width={2} dir="rtl">
              <Input
                onChange={this.handleChange}
                name="password_1"
                value={password_1}
                type="password"
                error={errors.password_1}
                label="گذرواژه"
              />
              <Input
                onChange={this.handleChange}
                name="password_2"
                value={password_2}
                type="password"
                error={errors.password_2}
                label="تکرار گذرواژه"
              />
            </Form.Group>
            <Form.Field dir="rtl">
              <a href="/login">عضو هستید؟ وارد شوید!</a>
            </Form.Field>
            <Form.Field dir="rtl">
              <Terms terms={terms} />
            </Form.Field>
            <Button onClick={this.onSubmit} color="blue" text="موافقت با قوانین و ثبت نام" />
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}
