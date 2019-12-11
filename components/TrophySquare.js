import React, { Component } from 'react';
import squareStatic from '../constants/trophy';
import anime from 'animejs';
import { connect } from 'react-redux';
let randTranslateX;
let randTranslateY;
let randRotate;
class TrophySquare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isAnimated: false}
    this.myref = React.createRef();
    this.scrollListener = this.scrollListener.bind(this);
    this.style = this.initializeStyle();
  }

  initializeStyle = () => {
    randTranslateX = 1 + Math.random() * 100;
    randTranslateY = 1 + Math.random() * 100;
    randRotate = 1 + Math.random() * 90;
    switch (this.props.place) {
      case 3:
        return {
          backgroundColor: squareStatic.thirdPlaceColor,
          width: squareStatic.thirdPlaceWidth,
          height: squareStatic.thirdPlaceWidth,
          transform: `translate(${randTranslateX}px, ${randTranslateY}px) rotate(${randRotate}deg)`,
        };
      case 2:
        return {
          backgroundColor: squareStatic.secondPlaceColor,
          width: squareStatic.secondPlaceWidth,
          height: squareStatic.secondPlaceWidth,
          transform: `translate(${randTranslateX}px, ${randTranslateY}px) rotate(${randRotate}deg)`,
        };
      case 1:
        return {
          backgroundColor: squareStatic.firstPlaceColor,
          width: squareStatic.firstPlaceWidth,
          height: squareStatic.firstPlaceWidth,
          transform: `translate(${randTranslateX}px, ${randTranslateY}px) rotate(${randRotate}deg)`,
        };
    }

  }
  scrollListener = () => {
    if (this.props.trophyChanged == this.props.place) {
      let self = this;
      const { transform } = this.myref.current.style;
      let splits = transform.split(' ');
      console.log(this.myref.current.style);
      randTranslateX = splits[0].substring(10, splits[0].length - 3);
      randTranslateY = splits[1].substring(0, splits[1].length - 3);
      var animations = anime.timeline({
        easing: 'spring(10, 2000, 40, 11)',
      });
      animations
        .add({
          targets: self.myref.current,
          translateX: -randTranslateX,
          translateY: -randTranslateY,
          rotate: 0,
        })
        .add({
          targets: self.myref.current,
          boxShadow: '5px 5px 30px white',
          complete: () => {
            self.setState({ isAnimated: true });
          },
        });
    }
  }
  
  render() {
    if (!this.state.isAnimated) {
      this.scrollListener();
    }
    return <div ref={this.myref} style={{ ...this.style }} />;
  }
}       


const mapStateToProps = (state) => {
  const { homeReducer } = state;
  return {
    trophyChanged: homeReducer.trophyChanged,
  };
};

export default connect(mapStateToProps)(TrophySquare);
