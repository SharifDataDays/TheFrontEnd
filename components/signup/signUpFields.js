import React, { Component } from 'react';
import {
  Grid,
  Form,
  Container,
  FormField,
  Button,
  Checkbox,
  Input,
  Responsive,
  Label,
} from 'semantic-ui-react';

import { DateInput } from 'semantic-ui-calendar-react';
import SignupInput from './input';
import SignupButton from './button';

export default class SignUpFields extends Component {
  state = {
    nameFa: '',
    lastNameFa: '',
    nameEn: '',
    lastNameEn: '',
    userName: '',
    email: '',
    birthDate: '',
    university: '',
    password: '',
    confirmPassword: '',
  };

  handleChange = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  };

  render() {
    const {
      name,
      lastName,
      userName,
      email,
      birthDate,
      university,
      password,
      confirmPassword,
    } = this.state;

    return (
      <Grid verticalAlign="middle">
        <Grid.Column>
          <Form>
            <Form.Group width={2} dir="rtl">
              <SignupInput
                name="nameFa"
                onChange={this.handleChange}
                value={name}
                label="نام به فارسی"
              />
              <SignupInput
                name="lastNameFa"
                onChange={this.handleChange}
                value={lastName}
                label="نام خانوادگی به فارسی"
              />
            </Form.Group>

            <Form.Group width={2} dir="rtl">
              <SignupInput
                name="nameEn"
                onChange={this.handleChange}
                value={name}
                label="نام به انگلیسی"
              />
              <SignupInput
                name="lastNameEn"
                onChange={this.handleChange}
                value={lastName}
                label="نام خانوادگی به انگلیسی"
              />
            </Form.Group>

            <Form.Group width={1} dir="rtl">
              <SignupInput
                name="university"
                onChange={this.handleChange}
                value={university}
                label="دانشگاه"
              />
              <div>
                <div style={{ marginBottom: 5 }}>
                  <label style={{ fontWeight: 'bold' }}>تاریخ تولد</label>
                </div>

                <DateInput
                  name="birthDate"
                  placeholder="تاریخ تولد"
                  iconPosition="right"
                  value={birthDate}
                  onChange={this.handleChange}
                />
              </div>
            </Form.Group>
            <Form.Group width={2} dir="rtl">
              <SignupInput
                onChange={this.handleChange}
                name="userName"
                value={userName}
                label="نام کاربری"
              />
              <SignupInput
                onChange={this.handleChange}
                name="email"
                value={email}
                type="email"
                label="ایمیل"
              />
            </Form.Group>

            <Form.Group width={2} dir="rtl">
              <SignupInput
                onChange={this.handleChange}
                name="password"
                value={password}
                type="password"
                label="گذرواژه"
              />
              <SignupInput
                onChange={this.handleChange}
                name="confirmPassword"
                value={confirmPassword}
                type="password"
                label="تکرار گذرواژه"
              />
            </Form.Group>
            <SignupButton onClick={this.props.notify} color="blue" text="ثبت نام" />
          </Form>
          
        </Grid.Column>
       
      </Grid>
    );
  }
}
