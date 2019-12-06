import React from 'react';
import Card from './cardRoot';

const LargeCard = ({ justifyContent, title, categorise, dir, contentSummary }) => {
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
    fontSizeCat: '15px',
    letterSpacingCat: '2px',
    mtHeading: '-1%',
    mbHeading: '5%',
    fontSizeHeading: '22px',
    fontSizeText: '13px',
    letterSpacingPreview: '1px',
  };

  return <Card {...props} />;
};

export default LargeCard;
