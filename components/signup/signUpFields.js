import React, { Component} from 'react'
import { Grid, Form, Container, FormField, Button, Checkbox, Input, Responsive, Label } from 'semantic-ui-react';
import SelectingDropDown from './DropDown'
import {monthOptions, persianMonthOptions} from './DropDown'
import SignupInput from './input'
import SignupButton from './button'

// export function handleMonthChange(e, {value}) {
//     e.persist()
//     console.log("******: ", e.target.textContent)
//     this.setState({birthMonth: e.target.textContent})
// }

export default class SignUpFields extends Component {   

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
        submittedConfirmPassword: ''
    }

    handleChange = (e, {name, value}) => this.setState({[name]: value})

    handleSubmit = () => {
        const {name, lastName, userName, email, birthDay, birthMonth, birthYear,
            university, education, residence, callingNumber, password, confirmPassword} = this.state

        this.setState({submittedName: name, submittedLastname:lastName, submittedUsername: userName, submittedEmail: email,
            submittedBirthDay: birthDay, submittedBirthMonth: birthMonth, submittedBirthYear: birthYear, submittedUniversity: university,
            submittededucation: education, submittedResidence: residence, submittedCallingNumber: callingNumber, submittedPassword: password,
            submittedConfirmPassword: confirmPassword})

        console.log(name)
        console.log(lastName)
        console.log(userName)
        console.log(email)
        console.log(birthDay)
        console.log(birthMonth)
        console.log(birthYear)
        console.log(university)
        console.log(education)
        console.log(residence)
        console.log(callingNumber)
        console.log(password)
        console.log(confirmPassword)
    }

    render() {
        const {name, lastName, userName, email, birthDay, birthMonth, birthYear,
             university, education, residence, callingNumber, password, confirmPassword} = this.state

        return (
            <Responsive as={Grid}>
                <Grid.Column>
                    <Form>
                        <Form.Group width={2} dir="rtl">
                            <SignupInput name="name" value={name} label="نام" />
                             <SignupInput name="lastName" value={lastName} label="نام خانوادگی" />
                        </Form.Group>

                        <Form.Group width={2} dir="rtl">
                            <SignupInput name="userName" value={userName} label="نام کاربری" />
                            <SignupInput name="email" value={email} label="ایمیل" />
                        </Form.Group>

                        {/* <FormField>
                            <label>تاریخ تولد</label>
                            
                            <Container className="three fields">
                                <Input name="birthYear" value={birthYear} type="number" min="1360" max="1390" placeholder="سال" dir="rtl"
                                 onChange={this.handleChange}/>
                                <SelectingDropDown name="birthMonth" value={birthMonth} options={persianMonthOptions} text="ماه"
                                 />
                                <Input name="birthDay" value={birthDay} type="number" min="1" max="31" placeholder="روز" dir="rtl"
                                 onChange={this.handleChange}/> 
                            </Container>
                        </FormField> */}

                        <Container>
                            <label>تاریخ تولد</label>
                        <Form.Group width={3} dir="rtl">
                            <Input name="birthDay" value={birthDay} type="number" min="1" max="31" placeholder="روز" dir="rtl"
                                 onChange={this.handleChange} style={{width: 500}}/>
                            <SelectingDropDown name="birthMonth" value={birthMonth} options={persianMonthOptions} text="ماه"
                                 /> 
                            <Input name="birthYear" value={birthYear} type="number" min="1360" max="1390" placeholder="سال" dir="rtl"
                                 onChange={this.handleChange} style={{width: 500}}/>
                            
                        </Form.Group>
                        </Container>

                        <Form.Group width={2} dir="rtl">
                             <SignupInput name="education" value={education} label="مقطع تحصیلی" />
                             <SignupInput name="university" value={university} label="دانشگاه" />
                        </Form.Group>

                        <Form.Group width={2} dir="rtl">
                             <SignupInput name="callingNumber" value={callingNumber} label="شماره تماس" />
                             <SignupInput name="residence" value={residence} label="محل سکونت" />
                        </Form.Group>

                        <Form.Group width={2} dir="rtl">
                             <SignupInput name="password" value={password} label="گذرواژه" />
                             <SignupInput name="confirmPassword" value={confirmPassword} label="تکرار گذرواژه" />
                        </Form.Group>

                        {/* <Form.Field> */}
                        {/* <Button className="ui vk button" style={{width:"48%", height:40} } onClick={this.handleSubmit}>ثبت نام</Button> */}
                        {/* <Button color="blue" style={{width:"48%", height:40} } onClick={this.handleSubmit}>ثبت نام</Button> */}
                        <SignupButton color="blue" text="ثبت نام" />
                        {/* <SignupButton text="test" color="black"/> */}
                        {/* </Form.Field> */}

                        {/* <SignupInput name="bahar" value="bahar" label="bahar"/> */}
                        
                    </Form>
                </Grid.Column>
            </Responsive>
        );
    }
}