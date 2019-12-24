import React, { Component } from 'react';
import {
  Grid,
  Form,
} from 'semantic-ui-react';

import { DateInput } from 'semantic-ui-calendar-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import SignupInput from '../loginSignup/input';
import SignupButton from '../loginSignup/button';
import { preReqCheck, reqSignup } from '../../redux/utils/signup';

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
    errors: {
      nameFa: false,
      lastNameFa: false,
      nameEn: false,
      lastNameEn: false,
      userName: false,
      email: false,
      birthDate: false,
      university: false,
      password: false,
      confirmPassword: false,
    },
  };

  handleChange = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  };

  onSubmit = async () => {
    let res = preReqCheck(this.state);
    this.setState({ errors: res.newErrors });
    if (res.problem) {
      this.props.notify(res.problem); 
    } else {
      await reqSignup(this.state)
    }
    
    
  };

  render() {
    const {
      nameFa,
      lastNameFa,
      nameEn,
      lastNameEn,
      userName,
      email,
      birthDate,
      university,
      password,
      confirmPassword,
    } = this.state;
    const { errors } = this.state;

    return (
      <Grid>
        <Grid.Column verticalAlign='middle'>
          <Form>
            <Form.Group width={2} dir="rtl">
              <SignupInput
                name="nameFa"
                onChange={this.handleChange}
                value={nameFa}
                error={errors.nameFa}
                label="نام به فارسی"
              />
              <SignupInput
                name="lastNameFa"
                onChange={this.handleChange}
                value={lastNameFa}
                error={errors.lastNameFa}
                label="نام خانوادگی به فارسی"
              />
            </Form.Group>

            <Form.Group width={2} dir="rtl">
              <SignupInput
                name="nameEn"
                onChange={this.handleChange}
                value={nameEn}
                error={errors.nameEn}
                label="نام به انگلیسی"
              />
              <SignupInput
                name="lastNameEn"
                onChange={this.handleChange}
                value={lastNameEn}
                error={errors.lastNameEn}
                label="نام خانوادگی به انگلیسی"
              />
            </Form.Group>

            <Form.Group width={2} dir="rtl">
              <SignupInput
                name="university"
                onChange={this.handleChange}
                value={university}
                error={errors.university}
                label="دانشگاه"
                width={8}
              />
              <div>
                <div style={{ marginBottom: 5 }}>
                  <label style={{ fontWeight: 'bold' }}>تاریخ تولد</label>
                </div>

                <DateInput
                  name="birthDate"
                  placeholder="تاریخ تولد"
                  popupPosition="top center"
                  closeOnMouseLeave="false"
                  icon={<FontAwesomeIcon icon={faCalendar} color='black'/>}
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
                error={errors.userName}
                label="نام کاربری"
              />
              <SignupInput
                onChange={this.handleChange}
                name="email"
                value={email}
                type="email"
                error={errors.email}
                label="ایمیل"
              />
            </Form.Group>

            <Form.Group width={2} dir="rtl">
              <SignupInput
                onChange={this.handleChange}
                name="password"
                value={password}
                type="password"
                error={errors.password}
                label="گذرواژه"
              />
              <SignupInput
                onChange={this.handleChange}
                name="confirmPassword"
                value={confirmPassword}
                type="password"
                error={errors.confirmPassword}
                label="تکرار گذرواژه"
              />
            </Form.Group>
            <SignupButton onClick={this.onSubmit} color="blue" text="ثبت نام" />
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}
