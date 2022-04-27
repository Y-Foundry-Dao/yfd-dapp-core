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
      <img src={`/logo-64-orange-transparent-square.png`} />
      <h2>DGSF Position {position}</h2>
      <ContractInfo>
        <Link
          href={`https://terrasco.pe/testnet/address/${contract}`}
          target="_blank"
        >
          View Contract
        </Link>
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
  margin: 5px;
`;

const ContractInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Link = styled.a`
  color: ${(props) => `${props.theme.colors.color3}`};
  text-decoration: none;
  width: auto;
  margin-left: 10px;
  margin-bottom: 5%;
  border: 2px solid ${(props) => `${props.theme.colors.color2}`};
  background: linear-gradient(hsl(203, 25%, 8%), hsl(203, 50%, 0%));
  padding: 0.6rem;
  padding-left: 2rem;
  padding-right: 2.2rem;
  text-align: center;
  border-top: 1px solid hsl(215, 5%, 50%);
  border-right: 1px solid hsl(215, 5%, 25%);
  border-left: 1px solid hsl(215, 5%, 25%);
  border-bottom: 1px solid hsl(215, 4%, 15%);
  border-radius: 1.375rem;
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
