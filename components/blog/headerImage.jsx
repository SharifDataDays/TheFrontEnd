// @flow
import React from 'react';
import type { Node } from 'react';
import { Image } from 'semantic-ui-react';

const imageSrc = 'https://source.unsplash.com/1600x900/?programming/1400x475';

type PropsType = {
  src: string,
};

function HeaderImageContainer({ src }: PropsType): Node {
  return <Image src={src || imageSrc} />;
}

export default HeaderImageContainer;
