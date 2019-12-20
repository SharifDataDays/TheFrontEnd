import _ from 'lodash';
import React from 'react';
import { Timeline, Events, TextEvent, themes, createTheme } from '@merc/react-timeline';

const customTheme = createTheme(themes.default, {
  timeline: {
    backgroundColor: '#252525',
    fontSize: '1.5rem',
    fontFamily: 'IRANSans',
  },
  timelineTrack: {
    right: '50%',
    width: '2px',
    height: '100%',
    backgroundColor: '#1d93f7',
    content: "''",
  },
  marker: {
    backgroundColor: '#252525',
    border: '2px solid #1d93f7',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    zIndex: 100,
  },
  card: {
    textAlign: 'right',
    borderRadius: '4px',
    backgroundColor: '#fff',
    color: '#333',
    padding: '1rem',
    // boxShadow: '0 6px 10px 3px hsla(0, 0%, 0%, 0.4)',
    width: '100%',
    maxWidth: '560px',
    a: {
      color: '#1d93f7',
    },
  },
  button: {
    fontSize: '14px',
    backgroundColor: '#1d93f7',
    borderRadius: '4px',
    padding: '6px',
    color: '#fff',
    margin: '10px 5px 5px 0',
    border: 'none',
    cursor: 'pointer',
  },
  date: {
    backgroundColor: '#1d93f7',
    padding: '4px',
    color: '#fff',
    borderRadius: '4px',
    fontWeight: 500,
    fontSize: '1.5rem',
  },
  events: {
    textAlign: 'right',
    padding: '10px',
  },
  event: {
    textAlign: 'right',
    marginBottom: '20px',
  },
  textAtom: {},
});

export default function Merc({ timeline }) {
  return (
    <Timeline theme={customTheme}>
      <Events>
        {_.map(timeline, (event, i) => {
          return (
            <TextEvent key={i} date={event.title_fa} text={_.replace(event.text_fa, '\r', '')} />
          );
        })}
      </Events>
    </Timeline>
  );
}
