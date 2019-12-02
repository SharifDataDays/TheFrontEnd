import React, { Component } from 'react';
import Parallax from 'react-springy-parallax'
import styled from 'styled-components';

const layer1 = "http://s6.picofile.com/file/8380137176/layer_01_1920_x_1080.png"
const layer2 = "http://s6.picofile.com/file/8380137200/layer_02_1920_x_1080.png"
const layer3 = "http://s6.picofile.com/file/8380137368/layer_05_1920_x_1080.png"
const layer4 = "http://s7.picofile.com/file/8380137468/layer_06_1920_x_1080.png"
const layer5 = "http://s6.picofile.com/file/8380137442/layer_07_1920_x_1080.png"


const bg_style = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
}

export default class Home extends Component {

    componentDidMount() {
        document.body.style.margin = 0;
        document.body.style.backgroundColor = "black";
    }

    render() {
        return (
            <div>
                <Parallax ref='parallax' pages={2}>
                    <div style={{ position: 'relative' }}>
                        <Parallax.Layer offset={0} speed={0}>
                            <img src={layer5} style={bg_style} />
                        </Parallax.Layer>
                        <Parallax.Layer offset={0} speed={0.1}>
                            <img src={layer4} style={bg_style} />
                        </Parallax.Layer>
                        <Parallax.Layer offset={0} speed={0.2}>
                            <img src={layer3} style={bg_style} />
                        </Parallax.Layer>
                        <Parallax.Layer offset={0} speed={0.3}>
                            <img src={layer2} style={bg_style} />
                        </Parallax.Layer>
                        <Parallax.Layer offset={0} speed={0.4}>
                            <div style={bg_style}>
                                <img src={layer1} style={{ position: "relative", width: "100%" }} />
                                <div style={{
                                    position: "relative",
                                    backgroundColor: "black",
                                    marginTop: "-10px",
                                    height: "1000px"
                                }}>

                                    {/* home content */}

                                </div>
                            </div>
                        </Parallax.Layer>
                    </div>
                </Parallax>

            </div>
        )
    }
}