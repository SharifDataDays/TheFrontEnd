import React from 'react';
import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent,
  TextEvent,
  YouTubeEvent,
  themes,
  createTheme,
} from '@merc/react-timeline';

const customTheme = createTheme(themes.default, {
  timeline: {
    backgroundColor: 'inherit',
    fontSize: '1rem',
    fontFamily: 'IRANSans',
  },
  timelineTrack: {
    left: '50%',
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
  urlButton: {
    fontSize: '14px',
    backgroundColor: '#1d93f7',
    borderRadius: '4px',
    padding: '6px',
    margin: '10px 5px 5px 0',
    border: 'none',
    color: '#fff',
  },
  date: {
    backgroundColor: '#1d93f7',
    padding: '4px',
    color: '#fff',
    borderRadius: '4px',
    fontWeight: 500,
    fontSize: '.85rem',
  },
  imageAtom: {
    objectFit: 'cover',
    overflow: 'hidden',
    width: '100%',
    maxHeight: '400px',
  },
  imageCredit: {
    marginTop: '10px',
    fontSize: '0.85rem',
  },
  imageText: {
    textAlign: 'right',
    marginBottom: '10px',
    fontSize: '1rem',
  },
  youTubeText: {
    textAlign: 'right',
    marginBottom: '10px',
    fontSize: '1rem',
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

export default function Merc() {
  return (
    <div style={{ marginTop: 14, marginBottom: 14 }}>
      <Timeline theme={customTheme} dir="RTL">
        <Events>
          <TextEvent date="1/1/19" text="**Markdown** is *supported*" />

          <ImageEvent
            date="4/13/19"
            text="سلام سلام سلاااااام"
            src="https://res.cloudinary.com/dovoq8jou/image/upload/v1564772194/jellyfish.jpg"
            alt="jellyfish swimming"
            credit="Photo by [@tavi004](https://unsplash.com/@tavi004)"
          >
            <div>
              <UrlButton href="https://unsplash.com/search/photos/undersea">
                View more undersea photos
              </UrlButton>
            </div>
          </ImageEvent>

          <YouTubeEvent
            date="6/18/19"
            id="6UnRHtwHGSE"
            name="General Tso's Chicken recipe"
            text="... and YouTube videos!"
          />
        </Events>
      </Timeline>
    </div>
  );
}
