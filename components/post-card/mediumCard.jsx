import React from 'react';
import Card from './cardRoot';

const MediumCard = ({ justifyContent, title, categorise, dir, contentSummary }) => {
  const props = {
    justifyContent,
    title,
    categorise,
    dir,
    contentSummary,
    width: '45%',
    height: '75%',
    mr: '2.5%',
    ml: '2.5%',
    mb: '5%',
    mt: '1%',
    className: 'posts-container-medium',
    ImageCardHeight: '250px',
    mtCat: '7%',
    mbCat: '7%',
    fontSizeCat: '15px',
    letterSpacingCat: '3px',
    mtHeading: '-1%',
    mbHeading: '7%',
    fontSizeHeading: '18px',
    fontSizeText: '13px',
    letterSpacingPreview: '1px',
  };

  return <Card {...props} />;
};

export default MediumCard;
