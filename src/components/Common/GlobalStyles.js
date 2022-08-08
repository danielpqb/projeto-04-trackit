import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`  
  * {
    background: none;
    border: none;
    margin: 0px;
    padding: 0px;

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

  input {
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    width: 100%;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
  }

  a {
    text-decoration: none;
    color: black;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;