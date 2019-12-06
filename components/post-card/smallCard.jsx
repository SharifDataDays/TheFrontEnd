import React from 'react';
import Card from './cardRoot';

const SmallCard = ({ justifyContent, title, categorise, dir, contentSummary, topicImage }) => {
  const props = {
    justifyContent,
    title,
    categorise,
    dir,
    contentSummary,
    width: '100%',
    height: '75%',
    mr: '2.5%',
    ml: '2.5%',
    mb: '15%',
    mt: '1%',
    className: 'posts-container-small',
    ImageCardHeight: '250px',
    mtCat: '4%',
    mbCat: '4%',
    fontSizeCat: '15px',
    letterSpacingCat: '3px',
    mtHeading: '1%',
    mbHeading: '5%',
    fontSizeHeading: '18px',
    fontSizeText: '13px',
    letterSpacingPreview: '1px',
    topicImage,
  };

  return <Card {...props} />;
};

export default SmallCard;
