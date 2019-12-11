import React, { Component } from 'react';
import TrophySquare from './TrophySquare';
import SquareLine from './SquareLine';
import squareStatic from '../constants/trophy';
import { changeTrophySelection } from '../actions/home';
import { connect } from 'react-redux';
let output = { marginTop: 0 };

class Trophy extends React.Component {
  constructor(props) {
    super(props);
    this.scrollListener = this.scrollListener.bind(this);
    this.myref = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollListener);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollListener);
  }

  scrollListener = () => {
    if (Math.abs(this.myref.current.getBoundingClientRect().y) < 130) {
      this.props.changeTrophySelection(this.props.place);
      
      window.removeEventListener('scroll', this.scrollListener);
    }
  };

  cupHandleMargin = () => {
    switch (this.props.place) {
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
  };
  cupHandle = (direction) => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          ...this.cupHandleMargin(),
        }}
      >
        <SquareLine place={this.props.place} flexDirection={'row'} numbers={3} />
        <div style={{ alignSelf: direction == 'right' ? 'flex-end' : 'flex-start' }}>
          <SquareLine place={this.props.place} flexDirection={'column'} numbers={1} />
        </div>
        <SquareLine place={this.props.place} flexDirection={'row'} numbers={3} />
        <div style={{ alignSelf: direction == 'right' ? 'flex-start' : 'flex-end' }}>
          <SquareLine place={this.props.place} flexDirection={'row'} numbers={1} />
        </div>
      </div>
    );
  };


  cupHead = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <SquareLine numbers={10} place={this.props.place} flexDirection={'row'} />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <SquareLine numbers={6} place={this.props.place} flexDirection={'column'} />
          <SquareLine numbers={6} place={this.props.place} flexDirection={'column'} />
        </div>
        <SquareLine numbers={10} place={this.props.place} flexDirection={'row'} />
      </div>
    );
  };


  cupNeck = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <SquareLine numbers={3} place={this.props.place} flexDirection={'column'} />
        <SquareLine numbers={3} place={this.props.place} flexDirection={'column'} />
      </div>
    );
  };

  cupFoot = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <SquareLine numbers={10} place={this.props.place} flexDirection={'row'} />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <SquareLine numbers={1} place={this.props.place} flexDirection={'column'} />
          <SquareLine numbers={1} place={this.props.place} flexDirection={'column'} />
        </div>
        <SquareLine numbers={10} place={this.props.place} flexDirection={'row'} />
      </div>
    );
  };
  render() {
    return (
      <div
        ref={this.myref}
        style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'black', height: 1000 }}
      >
        {this.cupHandle('left')}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {this.cupHead()}
          {this.cupNeck()}
          {this.cupFoot()}
        </div>
        {this.cupHandle('right')}
      </div>
    );
  }
  
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect((state) => {}, { changeTrophySelection })(Trophy);

