// @flow
import React from 'react';
import type { Node } from 'react';
import { Image } from 'semantic-ui-react';

function HeaderImage({ url }: { url: string }): Node {
  return <Image src={url} fluid />;
}

export default HeaderImage;
