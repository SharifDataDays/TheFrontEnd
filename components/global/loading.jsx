import React from 'react';
import { Dimmer } from 'semantic-ui-react';
import { ClipLoader } from 'react-spinners';

function Loading() {
  return (
    <Dimmer active>
      <ClipLoader size={75} color="white" />
    </Dimmer>
  );
}

export default Loading;
