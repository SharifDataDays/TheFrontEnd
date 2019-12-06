// @flow
import React from 'react';
import type { Node } from 'react';
import { Flex, Box, Heading, Text, Image } from 'rebass/styled-components';

function Comment({ comment }): Node {
  const { image, name, content, date } = comment;
  return (
    <Flex width={1} mb={4} bg="background">
      <Box p={3}>
        <Image
          src={image}
          sx={{
            width: 48,
            height: 48,
            borderRadius: 9999,
          }}
        />
      </Box>
      <Box p={3} width={1} textAlign="left">
        <Heading fontWeight="bold" color="text">
          {name}
        </Heading>
        <Text color="gray">{date}</Text>
        <Text>{content}</Text>
      </Box>
    </Flex>
  );
}

export default Comment;
