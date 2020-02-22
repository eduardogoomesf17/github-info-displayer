import styled from 'styled-components';

import * as colors from '../../config/colors';

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 170px;
    height: 170px;
  }

  p a {
    color: ${colors.BORDER_COLOR};
  }

  p a:hover {
    color: ${colors.HOVER_COLOR};
  }

  p {
    padding: 5px;
    margin: 5px 0;
  }
`;
