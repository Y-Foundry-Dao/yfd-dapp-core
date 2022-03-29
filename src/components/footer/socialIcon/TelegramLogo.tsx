import styled from 'styled-components';

import { colorChangeBlue } from 'utilities/keyframes';
import { ReactComponent as Telegram } from 'assets/socials/Telegram.svg';

const StyledTelegram = styled(Telegram)`
  width: 100%;
  height: 50px;
  margin: 0;
  padding: 0;
  z-index: 0;

  &:hover path {
    animation: ${colorChangeBlue} 0.15s linear forwards;
  }
`;

export default StyledTelegram;
