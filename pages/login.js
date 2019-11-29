import React, {Component} from 'react'
import {Box, Flex, Heading, Link, Button, Text} from 'rebass';
import { Input, Label } from '@rebass/forms';
import neuralnet from '../components/login/neuralnet'


class LoginPage extends Component {

    componentDidMount() {
        const canvas = this.refs.canvas
        this.renderCanvas(canvas)
    }

    renderCanvas = (canvas) => {
        neuralnet(canvas)
    }

    render() {
        return (
            <div>
                <Flex sx={{width : '80%', height : '80%', position: 'absolute',
                        left : 0, right : 0, top : 0, bottom : 0, margin : 'auto',
                        boxShadow : '1px 2px 4px rgba(0, 0, 0, .5)'}}>
                    <Box width={3/5} sx={{marginRight : 10}}>
                       <canvas ref='canvas' style={{width : '100%', height : '100%'}}></canvas>
                    </Box>
                    <Box width={2/5}>
                        <Heading>
                            Welcome!
                        </Heading>
                        <Box sx={{flexDirection : 'column', display : 'flex'}}>
                            <Label htmlFor='email'>Email</Label>
                            <Input
                                id='email'
                                name='email'
                                type='email'
                                placeholder='Enter your email here!'
                            />
                            <Label htmlFor='password'>Password</Label>
                            <Input
                                id='password'
                                name='password'
                                type='password'
                                placeholder='Enter your password here!'
                            />
                            <Link href=".">Forgot password?</Link>
                            <Button>Login</Button>
                            <Text>
                                Don't have an account?
                                <Link href='.'>Click here</Link>
                            </Text>
                        </Box>
                    </Box>
                </Flex>
            </div>
        )
    }
}


export default LoginPage