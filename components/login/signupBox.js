import React, { Component} from 'react'
import { Input, Label } from '@rebass/forms'
import { Box, Link, Button, Text } from 'rebass';

export default class SingupBox extends Component {
    render() {
        return (
            <Box sx={{flexDirection: 'column', display: 'flex', width: '75%', mx: 'auto' }}>
                <Label style={{marginTop: 20, marginBottom: 5, fontFamily: 'Arial'}} color='white' htmlFor='name'>
                    Name
                </Label>
                <Input
                    style={{border: 'none'}}
                    id='name'
                    name='name'
                    type='text'
                    placeholder='Enter your name'
                />
                <Label style={{marginTop: 20, marginBottom: 5, fontFamily: 'Arial'}} color='white' htmlFor='name'>
                    Lastname
                </Label>
                <Input
                    style={{border: 'none'}}
                    id='name'
                    name='name'
                    type='text'
                    placeholder='Enter your lastname'
                />
                <Label style={{marginTop: 20, marginBottom: -5, fontFamily: 'Arial'}} color='white' htmlFor='name'>
                    Birth Date
                </Label>
                <Box sx={{flexDirection: 'row', display: 'flex', width: '100%', mx:'auto'}}>
                    <Input 
                    style={{borderColor: 'white', marginTop: 20, marginRight: 15}}
                    id="day"
                    name='day'
                    type='day'
                    placeholder='Day'
                    />
                    <Input 
                    style={{borderColor: 'white', marginTop: 20, marginRight: 15}}
                    id="month"
                    name='month'
                    type='month'
                    placeholder='Month'
                    />
                    <Input 
                    style={{borderColor: 'white', marginTop: 20, marginRight: 15}}
                    id="year"
                    name='year'
                    type='year'
                    placeholder='Year'
                    />
                </Box>
                <Label style={{marginTop: 20, marginBottom: 5, fontFamily: 'Arial'}} color='white'>
                    Username
                </Label>
                <Input
                    style={{border: 'none'}}
                    id='username'
                    name='username'
                    type='text'
                    placeholder='Enter your username'
                />
                <Label style={{marginTop: 20, marginBottom: 5, fontFamily: 'Arial'}} color='white' htmlFor='password'>
                    Password
                </Label>
                <Input
                    style={{border: 'none'}}
                    id='password'
                    name='password'
                    type='text'
                    placeholder='Enter your password'
                />
                <Label style={{marginTop: 20, marginBottom: 5, fontFamily: 'Arial'}} color='white'>
                    Confirm Password
                </Label>
                <Input
                    style={{border: 'none'}}
                    id='confirmPassWord'
                    name='confirmPassword'
                    type='text'
                    placeholder='Repeat your password'
                />
                <Button variant='primary' mr={1} style={{backgroundColor: '#95d1fc', color: '#051838', marginTop: 20}}>
                    Sign Up
                </Button>
            </Box>
        );
    }
}