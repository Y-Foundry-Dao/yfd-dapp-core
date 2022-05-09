import styled from 'styled-components';
import PositionCard from './positionCard/PositionCard';
import UpdateModal from 'components/body/openPositions/positionCard/updateModal/UpdateModal';
import { useRecoilValue } from 'recoil';
import burgerAtom from 'recoil/burger/atom';
import modalIsOpenUpdateAtom from 'recoil/modalIsOpenUpdate/atom';
import positionsAtom from 'recoil/positions/atom';

function Positions() {
  const modalIsOpenUpdate = useRecoilValue(modalIsOpenUpdateAtom);
  const positions = useRecoilValue(positionsAtom);
  const burgerIsOpen = useRecoilValue(burgerAtom);

  return burgerIsOpen === false ? (
    <OpenPositionsList>
      {modalIsOpenUpdate ? <UpdateModal /> : null}
      {positions.map((position: any, i: number) => {
        return (
          <PositionCard key={i} position={position[0]} contract={position[1]} />
        );
      })}
    </OpenPositionsList>
  ) : null;
}

const OpenPositionsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: flex-start;
  align-self: auto;
  filter: blur(0px) !important;
  text-align: center;
`;

export default Positions;
