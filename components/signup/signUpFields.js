import React, { Component} from 'react'
import { Grid, Form, Container, FormField, Button, Checkbox, Input, Responsive, Label } from 'semantic-ui-react';
import SelectingDropDown from './DropDown'
import {monthOptions, persianMonthOptions} from './DropDown'

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
        confirmPassword: ''
    }

    render() {

        return (
            <Responsive as={Grid}>
                <Grid.Column>
                    <Form>
                        <Form.Group width={2}>
                            <Form.Input name="lastname" label="نام خانوادگی" width={10} style={{marginBottom: 10}}/>
                            <Form.Input name="name" label="نام" width={10} style={{marginBottom: 10}}/>
                        </Form.Group>

                        <Form.Group width={2}>
                            <Form.Input name="email" label="ایمیل" width={10} style={{marginBottom: 10}}/>
                            <Form.Input name="username" label="نام کاربری" width={10} style={{marginBottom: 10}}/>
                        </Form.Group>

                        <FormField>
                            <label>تاریخ تولد</label>
                            
                            <Container className="three fields">
                                <Input type="number" min="1360" max="1390" placeholder="سال" dir="rtl"/>
                                <SelectingDropDown options={persianMonthOptions} text="ماه"/>
                                <Input type="number" min="1" max="31" placeholder="روز" dir="rtl"/> 
                            </Container>
                        </FormField>

                        <Form.Group width={2}>
                            <Form.Input name="university" label="دانشگاه" width={10} style={{marginBottom: 10}}/>
                            <Form.Input name="education" label="مقطع تحصیلی" width={10} style={{marginBottom: 10}}/>
                        </Form.Group>

                        <Form.Group width={2}>
                            <Form.Input name="residence" label="محل سکونت" width={10} style={{marginBottom: 10}}/>
                            <Form.Input name="callingNumber" label="شماره تماس" width={10} style={{marginBottom: 10}}/>
                        </Form.Group>

                        <Form.Group width={2}>
                            <Form.Input name="confirmPassword" label="تکرار گذرواژه" type="password" width={10} style={{marginBottom: 10}}/>
                            <Form.Input name="password" label="گذرواژه" type="password" width={10} style={{marginBottom: 10}}/>
                        </Form.Group>

                        {/* <Form.Field> */}
                            <Button className="ui vk button" style={{width:"48%", height:40} } >ثبت نام</Button>
                        {/* </Form.Field> */}
                        

                        
                        
                    </Form>
                </Grid.Column>
            </Responsive>
        );
    }
}