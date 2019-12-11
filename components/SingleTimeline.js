import React from 'react';
import { Line, Circle } from 'rc-progress';
import { connect } from 'react-redux';
import { changeContext } from '../actions/home';
import { colors } from '../constants/color';
const SingleTimeline = (props) => {
  const showLine = () => {
    let opacityStyle = { opacity: 1 };
    if (props.last) opacityStyle.opacity = 0;
    return (
      <div style={styles.singleTimeline}>
        <Circle
          onClick={() => {
            props.changeContext(props.context);
          }}
          percent={props.progressline != '0' ? '100' : '0'}
          strokeWidth="5"
          strokeColor={colors.timelineStroke}
          trailWidth="5"
          trailColor={colors.timelineTrail}
          style={{ ...styles.circleStyle, ...circleColorHandler() }}
        />
        <Line
          percent={props.progressline}
          strokeWidth="5"
          trailWidth="5"
          strokeColor={colors.timelineStroke}
          trailColor={colors.timelineTrail}
          style={{ ...styles.lineStyle, ...opacityStyle }}
        />
      </div>
    );
  };

  const circleColorHandler = () => {
    if (props.homeContext == props.context) return { backgroundColor: colors.timelineSelected };
    return { backgroundColor: colors.timelineNotSelected };
  };

  return (
    <div>
      {showLine()}
      <p style={{ textAlign: 'space-between' }}>{props.phase}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { homeReducer } = state;
  return {
    homeContext: homeReducer.homeContext,
  };
};
export default connect(mapStateToProps, { changeContext })(SingleTimeline);

const styles = {
  lineStyle: {
    height: 3,
    width: '50%',
    left: 0,
    position: 'relative',
  },
  singleTimeline: {
    display: 'flex',
    flexDirection: 'reverse-row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 10,
    width: '100%',
  },
  circleStyle: {
    borderRadius: '50%',
    width: '50%',
  },
};
