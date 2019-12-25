import _ from 'lodash';
import React, { Component } from 'react';
import styled from 'styled-components';
import { space, layout, color, border, typography } from 'styled-system';
import { Header, Form, Responsive, Grid } from 'semantic-ui-react';
import { Fade } from 'react-reveal';
import { DateInput } from 'semantic-ui-calendar-react';
import { preReqCheck, profileUpdate } from '../../redux/utils/profile';
import { ToastContainer, toast } from 'react-toastify';


const fields = [
  {
    en: 'userName',
    fa: 'نام کاربری',
    readOnly: true,
  },
  {
    en: 'nameFa',
    fa: 'نام به فارسی',
    readOnly: false,
  },
  {
    en: 'lastNameFa',
    fa: 'نام خانوادگی به فارسی',
    readOnly: false,
  },
  {
    en: 'nameEn',
    fa: 'نام به انگلیسی',
    readOnly: false,
  },
  {
    en: 'lastNameEn',
    fa: 'نام خانوادگی به انگلیسی',
    readOnly: false,
  },
  {
    en: 'email',
    fa: 'ایمیل',
    readOnly: true,
  },
  {
    en: 'birthDate',
    fa: 'تاریخ تولد',
    readOnly: false,
    date: true,
  },
  {
    en: 'university',
    fa: 'دانشگاه',
    readOnly: false,
  },
  // {
  //   en: 'education',
  //   fa: 'تحصیلات',
  //   readOnly: true,
  // },
  // {
  //   en: 'residence',
  //   fa: 'محل اقامت',
  //   readOnly: true,
  // },
  // {
  //   en: 'callingNumber',
  //   fa: 'تلفن همراه',
  //   readOnly: true,
  // },
  {
    en: 'password',
    fa: 'رمز عبور',
    readOnly: false,
    pass: true,
  },
  {
    en: 'confirmPassword',
    fa: 'تکرار رمز عبور',
    readOnly: false,
    pass: true,
  },
];

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
      nameFa: this.props.profileData.nameFa,
      lastNameFa: this.props.profileData.lastNameFa,
      nameEn: this.props.profileData.nameEn,
      lastNameEn: this.props.profileData.lastNameEn,
      userName: this.props.profileData.userName,
      email: this.props.profileData.email,
      birthDate: this.props.profileData.birthDate,
      university: this.props.profileData.university,
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
    this.setState({ errors: res.newErrors });
    if (res.problem) {
      this.notify(res.problem); 
    } else {
      await profileUpdate(this.state)
    }
    
    
  };

  formInput = (field) => {
    const labelWidth = "170px"
    if (field.date) {
      return (
        <Form.Group inline>
          <Label py={2} style={{ width: labelWidth }}>
            {field.fa}:
          </Label>
          <DateInput
            placeholder={field.fa}
            name={field.en}
            value={this.state[field.en]}
            onChange={this.handleChange}
            popupPosition="top center"
            closeOnMouseLeave={false}
            readOnly={field.readOnly}
            width={6}
            // transparent={field.readOnly}
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
            <Form.Button content="ذخیره‌ی تغییرات" color="black" floated="right" size="large" />
          </Form>
        </Fade>
        {/* <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        /> */}
      </Container>
    );
  }
}

export default Profile;
