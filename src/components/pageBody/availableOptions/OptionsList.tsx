import styled from 'styled-components';
import OptionCard from 'components/pageBody/availableOptions/optionCard/OptionCard';

export default function Options() {
  return (
    <OptionsList>
      <OptionCard />
    </OptionsList>
  );
}

const OptionsList = styled.div`
  color: ${(props) => `${props.theme.colors.color5}`};
  margin: 5%;
  display: flex;
  flex-wrap: wrap;
  gap: 50px 30px;
  justify-content: space-evenly;
  align-content: space-between;
  align-self: flex-start;
  filter: blur(0px) !important;
  text-align: center;
`;

const SectionTitle = styled.h2`
  text-shadow: 1px 3px 6px
      ${(props) => `${props.theme.sectionTitle.textShadowColor1}`},
    0 0 0 ${(props) => `${props.theme.sectionTitle.textShadowColor2}`},
    1px 4px 2px ${(props) => `${props.theme.sectionTitle.textShadowColor3}`};
  margin: 1% 3% -1% 3%;
  color: ${(props) => `${props.theme.sectionTitle.textColor}`};
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
