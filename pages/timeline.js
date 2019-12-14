
import React from 'react';
import SingleTimeline from '../components/SingleTimeline';
import { connect } from 'react-redux';
const Home = (props) => {
  return (
    <div style={styles.timelineAndContextSection}>
      <div style={styles.outerContext}>
        <div style={styles.innerContext}>
          <p> {props.context}</p>
        </div>
      </div>
      <div style={styles.timelineSection}>
        <SingleTimeline
          id={1}
          progressline={100}
          phase="phase0"
          context="phase0 phase0 phase0 phase0 phase0 phase0 phase0 phase0 phase0 phase0
           phase0 phase phase0 phase0 phase0 phase0 phase0 phase0 phase0 phase0 
           phase0 phase0 phase0 phase"
        />
        <SingleTimeline
          id={2}
          progressline={100}
          context="hala 4 5 6 hame bikhiale ghosse"
          phase="phase1"
        />
        <SingleTimeline
          id={3}
          last={false}
          progressline={40}
          context="hala 7 8 9  hame bikhiale ghosse"
          phase="phase2"
        />
        <SingleTimeline
          id={4}
          last={true}
          progressline={0}
          context="hala 7 8 90  hame bikhiale ghosse"
          phase="phase3"
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { homeReducer } = state;
  return {
    context: homeReducer.homeContext,
  };
};

export default connect(mapStateToProps)(Home);

const styles = {
  outerContext: {
    position: 'relative',
    left: '-8%',
    width: '42%',
    alignSelf: 'center',
    height: 100,
    padding: 10,
    backgroundColor: 'rgba(245,245,245, 0.9)',
    borderRadius: 20,
  },
  innerContext: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    wordWrap: 'normal',
    overflowY: 'scroll',
    scrollbarWidth: 'none',
  },
  timelineAndContextSection: {
    display: 'flex',
    flexDirection: 'column',
    // width: 400,
  },
  timelineSection: { display: 'flex', flexDirection: 'row', width: '100%' },
};
