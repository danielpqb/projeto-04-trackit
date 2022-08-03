import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`  
  * {
    vertical-align: middle;
    box-sizing: border-box;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    object-fit: contain;
  }

  a {
    text-decoration: none;
    color: black;
  }

  body {
    margin: 0px;
  }

  img {
      width: 100%;
      height: 100%;
    }
`;