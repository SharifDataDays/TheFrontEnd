import _ from 'lodash';
import React from 'react';
import { Timeline, Events, TextEvent, themes, createTheme } from '@merc/react-timeline';

const customTheme = createTheme(themes.default, {
  timeline: {
    backgroundColor: 'inherit',
    fontSize: '1rem',
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
    backgroundColor: '#fff',
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
    padding: '10px',
    boxShadow: '0 4px 6px 0 hsla(0, 0%, 0%, 0.2)',
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
    fontSize: '.85rem',
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
        {_.map(timeline, (event) => {
          return <TextEvent date={event.title_fa} text={_.replace(event.text_fa, '\r', '')} />;
        })}
      </Events>
    </Timeline>
  );
}
