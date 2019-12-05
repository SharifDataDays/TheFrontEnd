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
  const src = `https://source.unsplash.com/1600x900/?${choices[index]}/350x350`;
  const direction = dir;
  return (
    <Flex
      width="29.4%"
      height="75%"
      flexDirection="column"
      flexWrap="wrap"
      justifyContent={justifyContentImage}
      mr="1.96%"
      ml="1.96%"
      mb="4%"
      mt="1%"
      className="posts-container"
    >
      <ImageCard height="280px" src={src} radius="20px" />

      <Text
        mt="9%"
        mb="4%"
        fontSize="13px"
        color="black"
        sx={{
          fontFamily: 'Soleil_Light,Helvetica,Arial,sans-serif',
          letterSpacing: '2px',
          textTransfrom: 'uppercase',
          direction,
        }}
      >
        {categorise}
      </Text>

      <Heading
        mt="2%"
        mb="7%"
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
        href="./blog"
        sx={{
          fontFamily: 'Soleil_Light,Helvetica,Arial,sans-serif',
          letterSpacing: '1px',
          direction,
        }}
        color="black"
      >
        read more
      </Link>
    </Flex>
  );
};

export default LargeCard;
