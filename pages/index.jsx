import React, { Component } from 'react';
import styled from 'styled-components';
import Parall from '../components/parall';
import Sponsers from '../components/sponsers';
import Stats from '../components/stats';
import { Provider } from 'react-redux';
import store from '../store/store';
import Trophy from '../../TheFrontEnd/components/Trophy';
import Timeline from '../pages/timeline';
import Wrapper from '../components/Wrapper';

const mobile1 = 'http://s6.picofile.com/file/8381771634/mobile1_new.jpg';
const mobile2 = 'http://s6.picofile.com/file/8381771668/mobile2_new.jpg';
const mobile3 = 'http://s7.picofile.com/file/8381771726/mobile3_new.jpg';
const web1 = 'http://s7.picofile.com/file/8381771750/web1_new.jpg';
const web2 = 'http://s7.picofile.com/file/8381771784/web2_new.jpg';

const layer5 = 'http://s6.picofile.com/file/8380137176/layer_01_1920_x_1080.png';
const layer4 = 'http://s6.picofile.com/file/8380137200/layer_02_1920_x_1080.png';
const layer3 = 'http://s6.picofile.com/file/8380137368/layer_05_1920_x_1080.png';
const layer2 = 'http://s7.picofile.com/file/8380137468/layer_06_1920_x_1080.png';
const layer1 = 'http://s6.picofile.com/file/8380137442/layer_07_1920_x_1080.png';
// const layers = [layer1, layer2, layer3, layer4, layer5];
const layers = [web2];

const logo1 = 'http://s6.picofile.com/file/8380759042/All_Logos39.png';
const logo2 = 'http://s6.picofile.com/file/8380760484/Bazaar_logo_and_logotype.png';
const logo3 = 'http://s7.picofile.com/file/8380759184/whicapp_%D8%A8%D9%84%D8%AF_logos_.png';
const logo4 = 'http://s7.picofile.com/file/8380759168/Tap30.png';
const logo5 = 'http://s6.picofile.com/file/8380759092/shariflogo.png';

const logos = [logo1, logo2, logo3, logo4, logo5];

const backgroundColor = '#333333';
const numberOfParticipants = 117;
const bg = 'white';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 1024,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
    document.body.style.margin = 0;
    document.body.style.backgroundColor = backgroundColor;
  }
  componentWillUnmount() {
    document.body.style.margin = 0;
    document.body.style.backgroundColor = bg;
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
    console.log(window.innerWidth);
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 768;
    let header = <img src={web2} style={{ position: 'relative', width: '100%' }} />;
    if (isMobile) {
      header = <img src={mobile1} style={{ position: 'relative', width: '100%' }} />;
    }
    return (
      <Provider store={store}>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'relative' }}>
            {/* <Parall layers={layers} backgroundColor={backgroundColor} /> */}
          </div>
          {header}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignContent: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <Stats participants={numberOfParticipants} />

            <Timeline />

              <Wrapper flexDirection={isMobile ? 'column' : 'row'} margin= {[0, 1]}>
                <Trophy place={2} />
                <Trophy place={1} />
                <Trophy place={3} />
              
              </Wrapper>
            <Sponsers logos={logos} />
          </div>

          {/* </Parall> */}
        </div>
      </Provider>
    );
  }
}
