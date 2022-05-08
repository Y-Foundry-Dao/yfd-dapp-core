import styled from 'styled-components';
import OptionCard from 'components/body/availableOptions/optionCard/OptionCard';

export default function Options() {
  return (
    <AvailableOptions>
      <StylizedTitle>Available Options</StylizedTitle>
      <OptionCard />
    </AvailableOptions>
  );
}

const AvailableOptions = styled.div`
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
