import React, { Component } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { Box } from 'rebass'
import styled from 'styled-components';



const layer1 = "http://s6.picofile.com/file/8380137176/layer_01_1920_x_1080.png"
const layer2 = "http://s6.picofile.com/file/8380137200/layer_02_1920_x_1080.png"
const layer3 = "http://s6.picofile.com/file/8380137368/layer_05_1920_x_1080.png"
const layer4 = "http://s7.picofile.com/file/8380137468/layer_06_1920_x_1080.png"
const layer5 = "http://s6.picofile.com/file/8380137442/layer_07_1920_x_1080.png"

const BgBox = styled(Box)`
    background-image: url(${props => props.bg_url});
    background-size: cover;
    background-repeat: no-repeat;
    margin: 0;
    padding: 0;
`

export default class Home extends Component {

    componentWillMount() {
        if (typeof window !== 'undefined') {
            document.body.style.margin = 0;
            document.body.style.backgroundColor = "black";
        }
    }
    render() {
        return (
            <ParallaxProvider>
                <Parallax y={[-40, 40]}>
                    <BgBox bg_url={layer5}>
                        <Parallax y={[10, -10]}>
                            <BgBox bg_url={layer4}>
                                <Parallax y={[10, -10]}>
                                    <BgBox bg_url={layer3}>
                                        <Parallax y={[10, -10]}>
                                            <BgBox bg_url={layer2} sx={{ height: '1000px' }}>
                                                <Parallax y={[5, -10]}>
                                                    <BgBox bg_url={layer1} sx={{ height: '1000px' }}>
                                                    </BgBox>
                                                    <div style={{ height: "800px", backgroundColor: "black" }}>rest of page content</div>
                                                </Parallax>
                                            </BgBox>
                                        </Parallax>
                                    </BgBox>
                                </Parallax>
                            </BgBox>
                        </Parallax>
                    </BgBox>
                </Parallax>


            </ParallaxProvider >

        )
    }
}

