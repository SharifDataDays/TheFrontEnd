import React, { Component } from 'react';
import { Grid, Form } from 'semantic-ui-react';
import { DateInput } from 'semantic-ui-calendar-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import Input from '../input';
import Button from '../button';
import check from './check';
import { reqSignup } from '~/redux/utils/signup';

export default class SignUpFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit() {
    let res = check(this.state);
    this.setState({ errors: res.newErrors });
    if (res.problem) {
      this.props.notify(res.problem);
    } else {
      await reqSignup(this.state);
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

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
        <Grid.Column verticalAlign="middle">
          <Form>
            <Form.Group width={2} dir="rtl">
              <Input
                name="nameFa"
                onChange={this.handleChange}
                value={nameFa}
                error={errors.nameFa}
                label="نام به فارسی"
              />
              <Input
                name="lastNameFa"
                onChange={this.handleChange}
                value={lastNameFa}
                error={errors.lastNameFa}
                label="نام خانوادگی به فارسی"
              />
            </Form.Group>

            <Form.Group width={2} dir="rtl">
              <Input
                name="nameEn"
                onChange={this.handleChange}
                value={nameEn}
                error={errors.nameEn}
                label="نام به انگلیسی"
              />
              <Input
                name="lastNameEn"
                onChange={this.handleChange}
                value={lastNameEn}
                error={errors.lastNameEn}
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
              <div>
                <div style={{ marginBottom: 5 }}>
                  <label style={{ fontWeight: 'bold' }}>تاریخ تولد</label>
                </div>

                <DateInput
                  name="birthDate"
                  placeholder="تاریخ تولد"
                  popupPosition="top center"
                  closeOnMouseLeave="false"
                  icon={<FontAwesomeIcon icon={faCalendar} color="black" />}
                  iconPosition="right"
                  value={birthDate}
                  onChange={this.handleChange}
                />
              </div>
            </Form.Group>
            <Form.Group width={2} dir="rtl">
              <Input
                onChange={this.handleChange}
                name="userName"
                value={userName}
                error={errors.userName}
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
                name="password"
                value={password}
                type="password"
                error={errors.password}
                label="گذرواژه"
              />
              <Input
                onChange={this.handleChange}
                name="confirmPassword"
                value={confirmPassword}
                type="password"
                error={errors.confirmPassword}
                label="تکرار گذرواژه"
              />
            </Form.Group>
            <Button onClick={this.onSubmit} color="blue" text="ثبت نام" />
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}
