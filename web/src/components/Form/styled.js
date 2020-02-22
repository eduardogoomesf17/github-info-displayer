import styled from 'styled-components';

import * as colors from '../../config/colors';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input[type="text"] {
    background: ${colors.DEFAULT_BACKGROUND_COLOR};
    height: 40px;
    padding: 0 20px;
    border: 2px solid ${colors.BORDER_COLOR};
    border-radius: 20px;
    font-size: 16px;
    color: ${colors.TEXT_COLOR};
    text-align: center;
    margin-bottom: 20px;
  }

  input[type="text"]:focus {
    border: 2px solid ${colors.HOVER_COLOR};
    width: 300px;
  }

  button[type="submit"] {
    background: ${colors.DEFAULT_BACKGROUND_COLOR};
    height: 40px;
    width: 100px;
    font-size: 16px;
    color: ${colors.TEXT_COLOR};
    border: 2px solid ${colors.BORDER_COLOR};
    border-radius: 20px;
    margin-bottom: 20px;
  }

  button[type="submit"]:hover {
    border: 2px solid ${colors.HOVER_COLOR};
    background-color: ${colors.HOVER_COLOR};
    cursor: pointer;
  }

`;
