// @flow
import styled from 'styled-components';
import { color } from 'styled-system';
import { ClipLoader } from 'react-spinners';

const Loader = styled(ClipLoader)`
  ${color};
  display: block;
  margin: 0 auto;
`;

export default Loader;
