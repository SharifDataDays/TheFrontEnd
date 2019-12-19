import React from 'react'
import {Button} from 'semantic-ui-react'
import handleSubmit from './signUpFields'
// onClick={this.handleSubmit.bind(this)}

const SignupButton = (props) => {
    return(
        <Button onClick={props.onClick} color={props.color} style={{width:"48%", height:40}}>
            {props.text}
        </Button>
    )
}

export default SignupButton