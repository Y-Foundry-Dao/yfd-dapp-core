import Button from 'components/buttons/basic/Button';
import styled from 'styled-components';
import PositionInfo from 'components/openPositions/PositionInfo';

interface Props {
  position: string;
  contract: string;
  modalIsOpen: boolean;
  setModalIsOpen: (arg0: boolean) => void;
  setPositionToUpdate: (arg0: string) => void;
  setContractForPosition: (arg0: string) => void;
}

interface StyledProps {
  modalIsOpen: boolean;
}

function PositionCard({
  position,
  contract,
  modalIsOpen,
  setModalIsOpen,
  setPositionToUpdate,
  setContractForPosition
}: Props) {
  const handleClick = () => {
    setPositionToUpdate(position);
    setContractForPosition(contract);
    return setModalIsOpen(true);
  };

  return (
    <Position modalIsOpen={modalIsOpen}>
      <ContractInfo>
        <PositionIndex>{position}</PositionIndex>
        <a
          href={`https://terrasco.pe/testnet/address/${contract}`}
          target="_blank"
        >
          View Contract
        </a>
      </ContractInfo>
      <PositionInfo position={position} contract={contract} />
      <Button
        children="Update Position"
        disabled={false}
        onClick={() => handleClick()}
      />
    </Position>
  );
}

const PositionIndex = styled.p`
  margin: 0;
`;

const ContractInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 5%;
`;

const Position = styled.div<StyledProps>`
  border: 2px solid ${(props) => `${props.theme.colors.color2}`};
  width: 25%;
  margin: 3% 6%;
  padding: 2% 3% 3% 2%;
  border-radius: 20px;
  background: rgba(8, 6, 11, 0.75);
  min-width: 300px;
  z-index: 1;
  overflow: hidden;
  filter: ${({ modalIsOpen }) => (modalIsOpen ? 'blur(20px)' : 'blur(0)')};
`;

export default PositionCard;
