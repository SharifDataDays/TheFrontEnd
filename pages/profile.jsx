import _ from 'lodash';
import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import styled from 'styled-components';
import { space, layout } from 'styled-system';
import { Container as Cnt, Header, Responsive, Label as L } from 'semantic-ui-react';
import { Fade } from 'react-reveal';
import Navbar from '~/components/global/navbar';

const profile_data = {
  name: 'صبا',
  lastName: 'آآآ',
  userName: 'svw',
  email: 'test@test.com',
  birthDay: '20',
  birthMonth: '6',
  birthYear: '2000',
  university: 'شریف',
  education: 'کارشناسی',
  residence: 'ته',
  callingNumber: '09190919091',
  // password: '',
  // confirmPassword: '',
};

const fields = [
  {
    en: 'name',
    fa: 'نام',
    readOnly: true,
  },
  {
    en: 'lastName',
    fa: 'نام خانوادگی',
    readOnly: true,
  },
  {
    en: 'userName',
    fa: 'نام کاربری',
    readOnly: true,
  },
  {
    en: 'email',
    fa: 'ایمیل',
    readOnly: true,
  },
  {
    en: 'birthDay',
    fa: 'تاریخ تولد',
    readOnly: true,
  },
  {
    en: 'birthMonth',
    fa: 'نام',
    readOnly: true,
  },
  {
    en: 'birthYear',
    fa: 'نام',
    readOnly: true,
  },
  {
    en: 'university',
    fa: 'دانشگاه',
    readOnly: true,
  },
  {
    en: 'education',
    fa: 'تحصیلات',
    readOnly: true,
  },
  {
    en: 'residence',
    fa: 'محل اقامت',
    readOnly: true,
  },
  {
    en: 'callingNumber',
    fa: 'تلفن همراه',
    readOnly: true,
  },
  {
    en: 'password',
    fa: 'رمز عبور',
    readOnly: false,
  },
  {
    en: 'confirmPassword',
    fa: 'تکرار رمز عبور',
    readOnly: false,
  },
];

const Container = styled.div`
  ${space}
`;

const Label = styled.label`
  ${space}
  ${layout}
`;

class Profile extends Component {
  state = {
    name: '',
    lastName: '',
    userName: '',
    email: '',
    birthDay: '',
    birthMonth: '',
    birthYear: '',
    university: '',
    education: '',
    residence: '',
    callingNumber: '',
    password: '',
    confirmPassword: '',

    submittedName: '',
    submittedLastname: '',
    submittedUsername: '',
    submittedEmail: '',
    submittedBirthDay: '',
    submittedBirthMonth: '',
    submittedBirthYear: '',
    submittedUniversity: '',
    submittededucation: '',
    submittedResidence: '',
    submittedCallingNumber: '',
    submittedPassword: '',
    submittedConfirmPassword: '',
  };

  state = profile_data;

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    const {
      name,
      lastName,
      userName,
      email,
      birthDay,
      birthMonth,
      birthYear,
      university,
      education,
      residence,
      callingNumber,
      password,
      confirmPassword,
    } = this.state;

    this.setState({
      submittedName: name,
      submittedLastname: lastName,
      submittedUsername: userName,
      submittedEmail: email,
      submittedBirthDay: birthDay,
      submittedBirthMonth: birthMonth,
      submittedBirthYear: birthYear,
      submittedUniversity: university,
      submittededucation: education,
      submittedResidence: residence,
      submittedCallingNumber: callingNumber,
      submittedPassword: password,
      submittedConfirmPassword: confirmPassword,
    });
  };

  form_input = (field) => {
    return (
      <Form.Group inline>
        {/* <Cnt dir="RTL"> */}
        <Label py={2} style={{width: "120px"}}>{field.fa}:</Label>
        {/* </Form.Group></Cnt> */}
        <Form.Input
          placeholder={field.fa}
          name={field.en}
          value={this.state[field.en]}
          onChange={this.handleChange}
          readOnly={field.readOnly}
          width={3}
          style={{
            borderStyle: "None"
          }}
        />
        
      </Form.Group>
    );
  };

  render() {
    const {
      name,
      lastName,
      userName,
      email,
      birthDay,
      birthMonth,
      birthYear,
      university,
      education,
      residence,
      callingNumber,
      password,
      confirmPassword,
    } = this.state;

    return (
      <>
        <Navbar />
        <Container px={[4, 6, 6]} py={[3, 4, 4]}>
          <Header size="huge" dividing dir="RTL">
            پروفایل
          </Header>

          <Fade up>
            <Form onSubmit={this.handleSubmit} dir="RTL">
              {_.map(fields, (field) => {
                return this.form_input(field);
              })}
              <Form.Button content="ذخیره‌ی تغییرات" />
            </Form>
          </Fade>
        </Container>
      </>
    );
  }
}

export default Profile;
