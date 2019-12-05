import React from 'react';
import { Flex, Heading, Text, Link } from 'rebass/styled-components';
import ImageCard from './imageCard';

const LargeCard = ({ justifyContentImage, title, categorise, dir, contentSummary }) => {
  const index = Math.floor(Math.random(5));
  const choices = [
    'programming',
    'developper',
    'macbook setup',
    'machine learning',
    'coding style',
  ];
  const src = `https://source.unsplash.com/1600x900/?${choices[index]}/350x250`;
  const direction = dir;
  return (
    <Flex
      width="100%"
      height="75%"
      flexDirection="column"
      flexWrap="wrap"
      justifyContent={justifyContentImage}
      mr="2.5%"
      ml="2.5%"
      mb="10%"
      mt="1%"
      className="posts-container"
    >
      <ImageCard height="250px" src={src} radius="20px" />
      <Text
        my="4%"
        fontSize="15px"
        color="black"
        sx={{
          fontFamily: 'Soleil_Light,Helvetica,Arial,sans-serif',
          letterSpacing: '3px',
          textTransfrom: 'uppercase',
          direction,
        }}
      >
        {categorise}
      </Text>

      <Heading
        mt="1%"
        mb="5%"
        fontSize="18px"
        color="black"
        sx={{
          fontFamily: 'Soleil_Bold,Helvetica,Arial,sans-serif',
          textTransfrom: 'uppercase',
          direction,
        }}
      >
        {title}
      </Heading>

      <Text
        fontSize="13px"
        color="black"
        sx={{
          fontFamily: 'Soleil_Light,Helvetica,Arial,sans-serif',
          letterSpacing: '1px',
          direction,
          display: 'block',
          textOverflow: 'ellipsis',
          wordWrap: 'break-word',
          overflow: 'hidden',
          maxHeight: '5.4em',
          lineHeight: '1.8em',
        }}
      >
        {contentSummary}
      </Text>
      <Link
        href="."
        sx={{
          fontFamily: 'Soleil_Light,Helvetica,Arial,sans-serif',
          letterSpacing: '1px',
          direction,
        }}
        color="black"
        mb="5%"
      >
        read more
      </Link>
    </Flex>
  );
};

export default LargeCard;
