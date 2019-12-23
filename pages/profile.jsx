import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import styled from 'styled-components';
import { space } from 'styled-system';
import NoSSR from 'react-no-ssr';
import { Divider, Image, Grid, Header, Responsive } from 'semantic-ui-react';
import { Zoom, Fade } from 'react-reveal';
import Navbar from '~/components/global/navbar';

const Container = styled.div`
  ${space}
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
        <Container p={[5, 6, 6]}>
          <Responsive minWidth={Responsive.onlyTablet.minWidth}>
              <Fade right>
            <Header size="huge" dividing dir="RTL">
              پروفایل
            </Header>

            <Form onSubmit={this.handleSubmit} dir="RTL">
              <Form.Input placeholder="نام" name="name" value={name} onChange={this.handleChange} />
              <Form.Input
                placeholder="ایمیل"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
              <Form.Input
                placeholder="نام کاربری"
                name="username"
                value={userName}
                onChange={this.handleChange}
                readOnly
              />
              <Form.Button content="ذخیره‌ی تغییرات" />
            </Form>
            </Fade>
          </Responsive>
        </Container>
      </>
    );
  }
}

export default Profile;
