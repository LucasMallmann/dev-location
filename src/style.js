import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    /* background: #9B65E6; */
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: Arial, Helvetica, sans-serif;
  }

  h1, h2, h3, h4, h5, h6, ul, li {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }

`;

export default GlobalStyle;
