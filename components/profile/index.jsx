import _ from 'lodash';
import React, { Component } from 'react';
import styled from 'styled-components';
import { space, layout } from 'styled-system';
import { Header, Form } from 'semantic-ui-react';
import { Fade } from 'react-reveal';

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
  // {
  //   en: ['birthDay', 'birthMonth', 'BirthYear'],
  //   fa: 'تاریخ تولد',
  //   placeHolder: ['روز', 'ماه', 'سال'],
  //   readOnly: true,
  // },
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
  constructor(props) {
    super(props);
    this.state = {
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
    this.state = this.props.profileData;
  }

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

  formInput = (field) => {
    // if (typeof field.en === 'object') {
    //   console.log(field.en);
    //   return (
    //     <Form.Group inline>
    //       <Label py={2} style={{ width: '120px' }}>
    //         {field.fa}:
    //       </Label>
    //       <Form.Group inline widths="2">
    //         {_.map(field.en, (f, ind) => {
    //           console.log(f);
    //           // let ind = 0
    //           return (
    //             <Form.Input
    //               placeholder={field.placeHolder[ind]}
    //               name={field.en[ind]}
    //               value={this.state[field.en[ind]]}
    //               onChange={this.handleChange}
    //               readOnly={field.readOnly}
    //               // width={2}
    //             />
    //           );
    //         })}
    //       </Form.Group>
    //     </Form.Group>
    //   );
    // }
    return (
      <Form.Group inline >
        <Label py={2} style={{ width: '120px' }}>
          {field.fa}:
        </Label>
        <Form.Input
          placeholder={field.fa}
          name={field.en}
          value={this.state[field.en]}
          onChange={this.handleChange}
          readOnly={field.readOnly}
          width={5}
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
      <Container px={[4, 6, 6]} py={[3, 4, 4]}>
        <Header size="huge" dividing dir="RTL">
          پروفایل
        </Header>

        <Fade up>
          <Form onSubmit={this.handleSubmit} dir="RTL">
            {_.map(fields, (field) => {
              return this.formInput(field);
            })}
            <Form.Button content="ذخیره‌ی تغییرات" inverted color='blue' floated="right"/>
            
          </Form>
        </Fade>
      </Container>
    );
  }
}

export default Profile;
