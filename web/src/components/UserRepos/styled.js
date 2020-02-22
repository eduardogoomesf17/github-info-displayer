import styled from 'styled-components';

import * as colors from '../../config/colors';

export const ReposContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 2px solid ${colors.BORDER_COLOR};
  padding: 10px 10px;
  height: 250px;


  p {
    word-break: break-word;
    margin: 25px 0;
  }
`;
