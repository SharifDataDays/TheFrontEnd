import _ from 'lodash';
import React, { Component } from 'react';
import styled from 'styled-components';
import { space, layout, color, border, typography } from 'styled-system';
import { Header, Form, Responsive, Grid } from 'semantic-ui-react';
import { Fade } from 'react-reveal';
import { DateInput } from 'semantic-ui-calendar-react';
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { fields, reverseBirthDate, check as preReqCheck } from './utils';
import { profileUpdate } from '~/components/dashboard/profile/api';

const Container = styled.div`
  ${space}
  ${color}
  ${border}
`;

const Label = styled.label`
  ${space}
  ${layout}
  ${typography}
`;

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname_fa: this.props.profileData.firstname_fa,
      lastname_fa: this.props.profileData.lastname_fa,
      firstname_en: this.props.profileData.firstname_en,
      lastname_en: this.props.profileData.lastname_en,
      // username: this.props.profileData.username,
      // email: this.props.profileData.email,
      birth_date: reverseBirthDate(this.props.profileData.birth_date),
      university: this.props.profileData.university,
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
        password_1: false,
        password_2: false,
      },
    };
  }

  notify = (choice) => {
    let options = {
      position: 'bottom-left',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    };
    switch (choice) {
      case 'incompleteFields':
        toast.error('فیلد های مشخص شده باید کامل شوند', options);
        break;
      case 'passwordsNotSame':
        toast.error('گذرواژه ها یکسان نیستند', options);
        break;
      case 'invalidEmail':
        toast.error('ایمیل وارد شده صحیح نیست', options);
        break;
      case 'success':
        toast.success('تغییرات با موفقیت ذخیره شد', options);
      default:
        break;
    }
  };

  handleChange = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  };

  onSubmit = async () => {
    let res = preReqCheck(this.state);
    this.setState({ errors: res.errors });
    if (res.problem) {
      this.notify(res.problem);
    } else {
      const sent = await profileUpdate(this.state, this.props.token);
      if (sent === true) this.notify('success');
    }
  };

  formInput = (field) => {
    const labelWidth = '170px';
    if (field.date) {
      return (
        <Form.Group inline>
          <Label py={2} style={{ width: labelWidth }}>
            {field.fa}:
          </Label>
          <DateInput
            placeholder={field.fa}
            name={field.en}
            value={reverseBirthDate(this.state[field.en])}
            onChange={this.handleChange}
            popupPosition="top center"
            closeOnMouseLeave={false}
            readOnly={field.readOnly}
            width={6}
            icon={<FontAwesomeIcon icon={faCalendar} color="black" />}
            hideMobileKeyboard
          />
        </Form.Group>
      );
    }
    return (
      <Form.Group inline>
        <Label py={2} style={{ width: labelWidth }}>
          {field.fa}:
        </Label>
        <Form.Input
          placeholder={field.fa}
          name={field.en}
          value={this.state[field.en]}
          onChange={this.handleChange}
          readOnly={field.readOnly}
          width={6}
          error={this.state.errors[field.en]}
          type={field.pass === true ? 'password' : 'none'}
          // transparent={field.readOnly}
        />
      </Form.Group>
    );
  };

  render() {
    console.log('STATE');
    console.log(this.state);
    console.log('PROPS');
    console.log(this.props);
    return (
      <Container
        px={[4, 5, 6]}
        py={5}
        m={0}
        backgroundColor="rgba(255, 255, 255, 0.3)"
        borderRadius={6}
      >
        <Header size="huge" dividing dir="RTL">
          پروفایل
        </Header>

        <Fade up>
          <Form onSubmit={this.onSubmit} dir="RTL">
            {_.map(fields, (field) => {
              return this.formInput(field);
            })}
            <Form.Button primary content="ذخیره‌ی تغییرات" floated="right" size="large" />
          </Form>
        </Fade>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
      </Container>
    );
  }
}

export default Profile;
