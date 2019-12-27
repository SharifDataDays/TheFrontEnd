// @flow
import React from 'react';
import type { Node } from 'react';
import { Image } from 'semantic-ui-react';
import {BASE} from '~/redux/api/index';

function HeaderImage({ url }: { url: string }): Node {
  return <Image src={BASE + url} fluid />;
}

export default HeaderImage;
