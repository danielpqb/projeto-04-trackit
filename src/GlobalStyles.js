import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`  
  div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: black;
  }

  body {
    margin: 0px 25px;
  }

  img {
      width: 100%;
      height: 100%;
    }
`;