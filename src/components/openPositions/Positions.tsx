import { useState } from 'react';
import styled from 'styled-components';
import PositionCard from './PositionCard';
import UpdateModal from 'components/openPositions/UpdateModal';
import { useRecoilState } from 'recoil';
import burgerAtom from 'recoil/burger/atom';

interface Props {
  positions: Array<string>;
  updateModalIsOpen: boolean;
  setUpdateModalIsOpen: (arg0: boolean) => void;
}

function Positions({
  positions,
  updateModalIsOpen,
  setUpdateModalIsOpen
}: Props) {
  const [contractForPosition, setContractForPosition] = useState('');
  const [positionToUpdate, setPositionToUpdate] = useState('');

  const [burgerIsOpen, setBurgerIsOpen] = useRecoilState(burgerAtom);

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
      {positions.map((position, i) => {
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
