import React from 'react';
import Card from './cardRoot';

const LargeCard = ({ justifyContent, title, categorise, dir, contentSummary, topicImage }) => {
  const props = {
    justifyContent,
    title,
    categorise,
    dir,
    contentSummary,
    width: '29.4%',
    height: '75%',
    mr: '1.96%',
    ml: '1.96%',
    mb: '4%',
    mt: '1%',
    className: 'posts-container-large',
    ImageCardHeight: '280px',
    mtCat: '9%',
    mbCat: '4%',
    fontSizeCat: '12px',
    letterSpacingCat: '3px',
    mtHeading: '1%',
    mbHeading: '5%',
    fontSizeHeading: '17px',
    fontSizeText: '13px',
    letterSpacingPreview: '0px',
    topicImage,
  };

  return <Card {...props} />;
};

export default LargeCard;
