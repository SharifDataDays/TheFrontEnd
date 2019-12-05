import React, { Component } from 'react';
import styled from 'styled-components';
import Parall from '../components/parall'

const layer5 = "http://s6.picofile.com/file/8380137176/layer_01_1920_x_1080.png"
const layer4 = "http://s6.picofile.com/file/8380137200/layer_02_1920_x_1080.png"
const layer3 = "http://s6.picofile.com/file/8380137368/layer_05_1920_x_1080.png"
const layer2 = "http://s7.picofile.com/file/8380137468/layer_06_1920_x_1080.png"
const layer1 = "http://s6.picofile.com/file/8380137442/layer_07_1920_x_1080.png"
const layers = [layer1, layer2, layer3, layer4, layer5]

const backgroundColor = "black"

export default class Home extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        document.body.style.margin = 0;
        document.body.style.backgroundColor = backgroundColor;
    }

    render() {
        return (
            <div>
                <Parall layers={layers} backgroundColor={backgroundColor}>
                    {/* {Home Content} */}
                </Parall>
            </div>
        )
    }
}