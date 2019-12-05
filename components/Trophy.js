import React, { Component } from 'react';
import TrophySquare from './TrophySquare';
import SquareLine from './SquareLine';
import squareStatic from '../constants/trophy';

const Trophy = (props) => {
  let output = {marginTop: 0}
  const cupHandleMargin = () => {
      switch(props.place) {
          case 1:
              output.marginTop = squareStatic.firstPlaceWidth;
              break;
          case 2:
              output.marginTop = squareStatic.secondPlaceWidth;
              break;
          case 3:
              output.marginTop = squareStatic.thirdPlaceWidth;
              break;
      }
      return output;
  }
  const cupHandle = (direction) => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          ...cupHandleMargin()
        }}
      >
        <SquareLine place={props.place} flexDirection={'row'} numbers={3} />
        <div style={{ alignSelf: direction == 'right' ? 'flex-end' : 'flex-start' }}>
          <SquareLine place={props.place} flexDirection={'column'} numbers={1} />
        </div>
        <SquareLine place={props.place} flexDirection={'row'} numbers={3} />
        <div style={{ alignSelf: direction == 'right' ? 'flex-start' : 'flex-end'}}>
          <SquareLine place={props.place} flexDirection={'row'} numbers={1} />
        </div>
      </div>
    );
  };

  const cupHead = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <SquareLine numbers={10} place={props.place} flexDirection={'row'} />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <SquareLine numbers={6} place={props.place} flexDirection={'column'} />
          <SquareLine numbers={6} place={props.place} flexDirection={'column'} />
        </div>
        <SquareLine numbers={10} place={props.place} flexDirection={'row'} />
      </div>
    );
  };

  const cupNeck = () => {
    return (
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <SquareLine numbers={3} place={props.place} flexDirection={'column'} />
        <SquareLine numbers={3} place={props.place} flexDirection={'column'} />
      </div>
    );
  };

  const cupFoot = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <SquareLine numbers={10} place={props.place} flexDirection={'row'} />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <SquareLine numbers={1} place={props.place} flexDirection={'column'} />
          <SquareLine numbers={1} place={props.place} flexDirection={'column'} />
        </div>
        <SquareLine numbers={10} place={props.place} flexDirection={'row'} />
      </div>
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'black', height: 1000}}>
      {cupHandle('left')}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {cupHead()}
        {cupNeck()}
        {cupFoot()}
      </div>
      {cupHandle('right')}
    </div>
  );
};

export default Trophy;
