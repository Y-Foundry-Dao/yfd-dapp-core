import styled from 'styled-components';

import { colorChangeBlue } from 'utilities/keyframes';
import { ReactComponent as Discord } from 'assets/socials/discord.svg';

const StyledDiscord = styled(Discord)`
  width: 100%;
  height: 50px;
  margin: 0;
  padding: 0;
  z-index: 0;

  &:hover path {
    animation: ${colorChangeBlue} 0.15s linear forwards;
  }
`;

export default StyledDiscord;
