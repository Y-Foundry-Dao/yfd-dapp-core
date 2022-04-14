import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Button from 'components/buttons/basic/Button';
import TxHashLink from 'components/depositModal/txHash/TxHashLink';
import InputContract from 'components/depositModal/input/InputContract';
import InputAmount from 'components/depositModal/input/InputAmount';

import useQuery from 'utilities/hooks/useQuery';
import msgQuery from 'utilities/msgQuery';
import AvailableAmount from '../availableAmount/AvailableAmount';

interface Props {
  setModalIsOpen: (arg0: boolean) => void;
  instantiateContract: any;
  txHashFromInstantiate: any;
  contract: any;
  setContract: any;
  txHashFromExecute: any;
}

function DepositModal({
  setModalIsOpen,
  instantiateContract,
  txHashFromInstantiate,
  contract,
  setContract,
  txHashFromExecute
}: Props) {
  const [amount, setAmount] = useState<number>(0);
  const { query } = useQuery();
  useEffect(() => {
    if (localStorage.getItem('contractAddress') !== null) {
      setContract(localStorage.getItem('contractAddress'));
    }
  }, []);

  const handleClick = async () => {
    return await query(contract, msgQuery).then(() => setModalIsOpen(false));
  };

  return (
    <ModalHolder>
      <Modal>
        <CloseButton onClick={handleClick}>x</CloseButton>
        <Header>Degen Stable Farm</Header>
        <InputContract contract={contract} setContract={setContract} />
        <p>Current Contract Address: {contract}</p>
        <p>tx for contract instantiation</p>
        <TxHashLink txHash={txHashFromInstantiate?.txhash} />
        <p>tx for deposit</p>
        <TxHashLink txHash={txHashFromExecute} />
        <InputAmount amount={Number(amount)} setAmount={setAmount} />
        <AvailableAmount setAmount={setAmount} />
        <DepositButton
          children="open position"
          disabled={false}
          onClick={async () => {
            return await instantiateContract(amount);
          }}
        />
      </Modal>
    </ModalHolder>
  );
}
const DepositButton = styled(Button)`
  align-self: center;
  margin-top: 4%;
`;

const Header = styled.h2`
  align-self: center;
  margin-top: -4%;
  margin-bottom: 10%;
`;

const CloseButton = styled.button`
  color: ${(props) => `${props.theme.colors.white}`};
  background-color: rgba(8, 6, 11, 0.9);
  border: none;
  position: relative;
  width: 30px;
  right: -110%;
  font-size: 1.4rem;
`;

const ModalHolder = styled.div`
  position: absolute;
  left: 18%;
  top: 20%;
  background: rgba(8, 6, 11, 0.9);
  border-radius: 20px;
  width: 70%;
  z-index: 6;
  pointer-events: auto;
  filter: blur(0) !important;
`;

const Modal = styled.div`
  padding: 4%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 70%;
  margin-left: 10%;
`;

export default DepositModal;
