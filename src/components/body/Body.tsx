import React from 'react';
import styled from 'styled-components';

import OptionCard from 'components/body/availableOptions/optionCard/OptionCard';
import Positions from 'components/body/openPositions/Positions';

function Body() {
  return (
    <StylizedDiv>
      <StyledPageTitle>Foundry</StyledPageTitle>
      <StylizedTitle>My Open Positions</StylizedTitle>
      <Positions />
      <AvailableOptions>
        <StylizedTitle>Available Options</StylizedTitle>
        <OptionCard />
      </AvailableOptions>
    </StylizedDiv>
  );
}

const StylizedDiv = styled.div`
  width: 92%;
  margin: auto;
  padding-bottom: 30px;
  color: ${(props) => `${props.theme.colors.color5}`};
`;

const StylizedTitle = styled.h2`
  text-shadow: 1px 3px 6px black, 0 0 0 gray, 1px 4px 2px #333;
  margin-bottom: -1%;
  margin-top: 3%;
  color: ${(props) => `${props.theme.colors.color3}`};
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  grid-template-rows: 27px 0;
  grid-gap: 20px;
  align-items: center;

  :after,
  :before {
    content: ' ';
    display: block;
    border-bottom: 1px solid ${(props) => `${props.theme.colors.color3}`};
    box-shadow: 0 6px 7px -7px ${(props) => `${props.theme.colors.color1}`};
    height: 5px;
  }
`;

const StyledPageTitle = styled.h1`
  text-shadow: 1px 4px 6px black, 0 0 0 gray, 1px 4px 2px orange;
  text-align: center;
  position: relative;
  width: 100%;
  margin: 2% auto 0 auto;
  text-transform: uppercase;
  text-rendering: optimizeLegibility;
  letter-spacing: 0.3em;
  text-shadow: 0px 1px 0 ${(props) => `${props.theme.colors.color1}`},
    4px 4px 0 #333;
  color: ${(props) => `${props.theme.colors.color3}`};
  border-bottom: 5px solid ${(props) => `${props.theme.colors.color3}`};
  border-top: 5px solid ${(props) => `${props.theme.colors.color3}`};
`;

const AvailableOptions = styled.div`
  color: ${(props) => `${props.theme.colors.color5}`};
`;

export default Body;
