import Options from 'components/pageBody/availableOptions/Options';
import Positions from 'components/pageBody/openPositions/Positions';
import { useState } from 'react';
import styled from 'styled-components';
import StakeYFD from './stake/StakeYFD';

function PageBody() {
  return (
    <div>
      <h1>Foundry</h1>
      <StakeYFD />
      {/* <Positions /> */}
      {/* <Options /> */}
    </div>
  );
}

// const PageBody = styled.div`
//   grid-area: pageBody;
// `;

// const PageTitle = styled.h1`
//   text-shadow: 1px 4px 6px black, 0 0 0 gray, 1px 4px 2px orange;
//   text-align: center;
//   margin: 2%;
//   padding-bottom: 2px;
//   text-transform: uppercase;
//   text-rendering: optimizeLegibility;
//   letter-spacing: 0.3em;

//   z-index: 0;
// `;

export default PageBody;
