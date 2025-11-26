import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    box-sizing: border-box;
    overflow: hidden;
  }

  body {
    font-family: "Pretendard", sans-serif;
    background-color: #fff;
    color: #121212;
  }
`;

export default GlobalStyle;
