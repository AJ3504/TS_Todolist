import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}

*{
    font-family: 'NanumSquareNeo-Variable', sans-serif;
    outline:none;
    box-sizing: border-box;
}

html,
body,
#root {
  font-family: 'NanumSquareNeo-Variable', sans-serif;
  font-size: 16px;
  word-break: keep-all;
  color: #000000c1;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

img {
  max-width: 100%;
  height: auto;
}

//
@font-face {
    font-family: 'NanumSquareNeo-Variable';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/NanumSquareNeo-Variable.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}





`;
export default GlobalStyle;
