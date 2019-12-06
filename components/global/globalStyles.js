// @flow
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    margin: 0;
    padding-top: 88px;
    min-height: 100%;
    position: relative;
  }
  body::after {
    content: '';
    display: block;
    height: 84px;
  }
`;

export default GlobalStyle;
