import React, { Component } from 'react';
import styled from 'styled-components';
import Parall from '../components/parall';
import Sponsers from '../components/sponsers';
import Stats from '../components/stats';
import { Provider } from 'react-redux';
import store from '../store/store';
import Trophy from '../../TheFrontEnd/components/Trophy';
import Timeline from '../pages/timeline';

const layer5 = 'http://s6.picofile.com/file/8380137176/layer_01_1920_x_1080.png';
const layer4 = 'http://s6.picofile.com/file/8380137200/layer_02_1920_x_1080.png';
const layer3 = 'http://s6.picofile.com/file/8380137368/layer_05_1920_x_1080.png';
const layer2 = 'http://s7.picofile.com/file/8380137468/layer_06_1920_x_1080.png';
const layer1 = 'http://s6.picofile.com/file/8380137442/layer_07_1920_x_1080.png';
const layers = [layer1, layer2, layer3, layer4, layer5];

const logo1 = 'http://s6.picofile.com/file/8380759042/All_Logos39.png';
const logo2 = 'http://s6.picofile.com/file/8380760484/Bazaar_logo_and_logotype.png';
const logo3 = 'http://s7.picofile.com/file/8380759184/whicapp_%D8%A8%D9%84%D8%AF_logos_.png';
const logo4 = 'http://s7.picofile.com/file/8380759168/Tap30.png';
const logo5 = 'http://s6.picofile.com/file/8380759092/shariflogo.png';

const logos = [logo1, logo2, logo3, logo4, logo5];

const backgroundColor = 'black';
const numberOfParticipants = 117;

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.body.style.margin = 0;
    document.body.style.backgroundColor = backgroundColor;
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <Parall layers={layers} backgroundColor={backgroundColor}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'center',
                justifyContent: 'center',
              }}
            >
              <Stats participants={numberOfParticipants} />
              <Timeline />
              <div
                style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
              >
                <Trophy place={1} />
                <Trophy place={2} />
                <Trophy place={3} />
              </div>
              <Sponsers logos={logos} />
            </div>
          </Parall>
        </div>
      </Provider>
    );
  }
}
