import styled, { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

import * as colors from '../config/colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    font-family: sans-serif, Arial, Helvetica, sans-serif;
    background-color: ${colors.BACKGROUND_COLOR}
  }

  h1, p {
    color: ${colors.TEXT_COLOR};
  }

  h1 {
    margin: 25px 0;
  }

  p {
    font-size: 16px;
  }

  a {
    text-decoration: none;
  }

  hr {
    border: 1px solid ${colors.BORDER_COLOR};
    width: 90%;
    margin-bottom: 10px;
  }

  div.userInfo {
    margin: 20px auto;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 15%;
  text-align: center;
  border-radius: 10px;
  background: ${colors.CONTAINER_BACKGROUND_COLOR};
`;
