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
  .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
`;

export default GlobalStyle;
