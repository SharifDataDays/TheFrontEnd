/* eslint-disable react/prop-types */
import React from 'react';
import { Flex } from 'rebass/styled-components';
import ImageCard from './imageCard';
import Categoris from './categoriseCard';
import Heading from './headingCard';
import PreviewContent from './previewContent';
import ReadMore from './readMore';

const index = Math.floor(Math.random(5));
const choices = ['programming', 'developper', 'macbook setup', 'machine learning', 'coding style'];
const src = `https://source.unsplash.com/1600x900/?${choices[index]}/350x350`;

const Card = ({
  justifyContentImage,
  title,
  categorise,
  dir,
  contentSummary,
  width,
  height,
  mr,
  ml,
  mb,
  mt,
  className,
  ImageCardHeight,
  mtCat,
  mbCat,
  fontSizeCat,
  letterSpacingCat,
  mtHeading,
  mbHeading,
  fontSizeHeading,
  fontSizeText,
  letterSpacingPreview,
}) => {
  return (
    <Flex
      width={width}
      height={height}
      flexDirection="column"
      flexWrap="wrap"
      justifyContent={justifyContentImage}
      mr={mr}
      ml={ml}
      mb={mb}
      mt={mt}
      className={className}
    >
      <ImageCard height={ImageCardHeight} src={src} radius="20px" />

      <Categoris
        mt={mtCat}
        mb={mbCat}
        content={categorise}
        fontSize={fontSizeCat}
        letterSpacing={letterSpacingCat}
        direction={dir}
      />

      <Heading
        mt={mtHeading}
        mb={mbHeading}
        fontSize={fontSizeHeading}
        color="black"
        direction={dir}
        content={title}
      />

      <PreviewContent
        content={contentSummary}
        fontSize={fontSizeText}
        letterSpacing={letterSpacingPreview}
        direction={dir}
      />

      <ReadMore href="./blog" direction={dir} />
    </Flex>
  );
};

export default Card;
