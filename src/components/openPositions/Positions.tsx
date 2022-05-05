import { useState } from 'react';
import styled from 'styled-components';
import PositionCard from './PositionCard';
import UpdateModal from 'components/openPositions/UpdateModal';
import { useRecoilState, useRecoilValue } from 'recoil';
import burgerAtom from 'recoil/burger/atom';
import modalIsOpenUpdateAtom from 'recoil/modalIsOpenUpdate/atom';
import positionsAtom from 'recoil/positions/atom';

function Positions() {
  const [contractForPosition, setContractForPosition] = useState('');
  const [positionToUpdate, setPositionToUpdate] = useState('');
  const [updateModalIsOpen, setUpdateModalIsOpen] = useRecoilState(
    modalIsOpenUpdateAtom
  );

  const positions = useRecoilValue(positionsAtom);
  const burgerIsOpen = useRecoilValue(burgerAtom);

  return burgerIsOpen === false ? (
    <OpenPositions>
      {updateModalIsOpen ? (
        <UpdateModal
          position={positionToUpdate}
          positionToUpdate={positionToUpdate}
          contract={contractForPosition}
          modalIsOpen={updateModalIsOpen}
          setModalIsOpen={setUpdateModalIsOpen}
        />
      ) : null}
      {positions.map((position: any, i: any) => {
        return (
          <PositionCard
            key={i}
            modalIsOpen={updateModalIsOpen}
            setModalIsOpen={setUpdateModalIsOpen}
            position={position[0]}
            contract={position[1]}
            setPositionToUpdate={setPositionToUpdate}
            setContractForPosition={setContractForPosition}
          />
        );
      })}
    </OpenPositions>
  ) : null;
}

const OpenPositions = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: flex-start;
  align-self: auto;
  filter: blur(0px) !important;
  text-align: center;
`;

export default Positions;
