import styled from 'styled-components';
import OpenPositionsList from 'components/pageBody/openPositions/PositionsList';
import { useRecoilValue } from 'recoil';
import burgerAtom from 'recoil/burger/atom';
import modalIsOpenUpdateAtom from 'recoil/modalIsOpenUpdate/atom';
import positionsAtom from 'recoil/positions/atom';

function Positions() {
  const modalIsOpenUpdate = useRecoilValue(modalIsOpenUpdateAtom);
  const positionList = useRecoilValue(positionsAtom);
  const burgerIsOpen = useRecoilValue(burgerAtom);

  return burgerIsOpen === false ? (
    <OpenPositions>
      <SectionTitle>My Open Positions</SectionTitle>
      <OpenPositionsList />
    </OpenPositions>
  ) : null;
}

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

const OpenPositions = styled.div`
  padding-bottom: 2%;
`;

export default Positions;
