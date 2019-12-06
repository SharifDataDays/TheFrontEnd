import React from 'react';
import styled from 'styled-components';
import { border } from 'styled-system';
import { Button as RebassButton } from 'rebass/styled-components';
import { Input } from '@rebass/forms';
import {Label} from '@rebass/forms'
import css from '@styled-system/css'

export const Button = styled(RebassButton)(

    css({
        cursor: 'pointer',
        backgroundColor : '#95d1fc',
        color : '#051838',
        fontFamily: "Times New Roman",
        fontSize: 20,
        boxShadow: 20,
        "&:hover" : {
            backgroundColor: '#b8e1ff'
        },
    })
)

export function LoginSignupButton({text}){
    return(
        <Button>
            {text}
        </Button>
    )
}

