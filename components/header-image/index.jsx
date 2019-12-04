import React from 'react';
import { Flex } from 'rebass/styled-components';
import { ThemeProvider } from 'styled-components';
import HeaderImage from './image';
import theme from '~/theme';

const imageSrc = 'https://source.unsplash.com/1600x900/?programming/1440x475';

function HeaderImageContainer(props) {
  return (
    <ThemeProvider theme={theme}>
      <Flex
        className="header-image-container"
        sx={{
          maxWidth: '100vw',
          height: '60vh'
        }}
        justifyContent="center"
      >
        {' '}
        <HeaderImage src={imageSrc} />{' '}
      </Flex>
    </ThemeProvider>
  );
}

export default HeaderImageContainer;
