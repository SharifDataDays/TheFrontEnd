// @flow
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    font-family: IRANSans !important;
  }
  body {
    margin: 0;
    min-height: 100%;
    position: relative;
  }
  .markdown {
    direction: rtl !important;
  }
`;

export default GlobalStyle;
