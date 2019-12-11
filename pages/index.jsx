import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '../store/store';
import Trophy from '../../TheFrontEnd/components/Trophy'
import Timeline from '../pages/timeline';
const Home = () => (
<Provider store = {store}>
  <div>
    <Trophy place = {1}/>
    <Trophy place = {2}/>
    <Trophy place = {3}/>
    <Timeline/>
  </div>
  </Provider>
);

export default Home;
