// @flow
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components';
import { shadow } from 'styled-system';
import { Flex, Box, Heading, Text, Image } from 'rebass/styled-components';

const ShadowedBox = styled(Box)`
  ${shadow};
`;

function Comment({ comment }): Node {
  const { image, name, content, date } = comment;
  return (
    <ShadowedBox width={1} mb={4} bg="background" boxShadow={0}>
      <Flex width={1} px={3} py={[2, 3, 3]} bg="background">
        <Box>
          <Image
            src={image}
            sx={{
              width: 48,
              height: 48,
              borderRadius: 9999,
            }}
          />
        </Box>
        <Box px={[2, 3, 3]} width={1} textAlign="left">
          <Heading fontWeight="bold" color="text" mb={1}>
            {name}
          </Heading>
          <Text color="gray">{date}</Text>
        </Box>
      </Flex>
      <Box px={3} pb={[2, 3, 3]} width={1} textAlign="left">
        <Text lineHeight="1.5">{content}</Text>
      </Box>
    </ShadowedBox>
  );
}

export default Comment;
