import Options from 'components/body/availableOptions/Options';
import Positions from 'components/body/openPositions/Positions';
import { useState } from 'react';
import styled from 'styled-components';
import StakeYFD from './stake/StakeYFD';

function Body() {
  return (
    <PageBody>
      <PageTitle>Foundry</PageTitle>
      <StakeYFD />
      {/* <Positions /> */}
      {/* <Options /> */}
    </PageBody>
  );
}

const PageBody = styled.div`
  grid-area: pageBody;
`;

const PageTitle = styled.h1`
  text-shadow: 1px 4px 6px black, 0 0 0 gray, 1px 4px 2px orange;
  text-align: center;
  margin: 2%;
  padding-bottom: 2px;
  text-transform: uppercase;
  text-rendering: optimizeLegibility;
  letter-spacing: 0.3em;
  text-shadow: 0px 1px 0 ${(props) => `${props.theme.colors.color1}`},
    4px 4px 0 #333;
  color: ${(props) => `${props.theme.colors.color3}`};
  border-bottom: 5px solid ${(props) => `${props.theme.colors.color3}`};
  border-top: 5px solid ${(props) => `${props.theme.colors.color3}`};
  z-index: 0;
`;

export default Body;
