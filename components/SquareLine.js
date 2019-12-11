import React, { Component } from 'react';
import TrophySquare from './TrophySquare';

const SquareLine = (props) => {
  const showLine = () => {
    var output = [];    
    for (let i = 0; i < props.numbers; i++) output.push(<TrophySquare place={props.place} />);    
    return output;
  };
  return (
    <div style={{ display: 'flex', flexDirection: props.flexDirection }}> {showLine()}</div>
  );
};

export default SquareLine;
