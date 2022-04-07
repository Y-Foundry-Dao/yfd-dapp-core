import { useState, useCallback } from 'react';
import styled from 'styled-components';

import Button from 'components/buttons/basic/Button';
import TxHashLink from 'components/depositModal/txHash/TxHashLink';
import InputContract from 'components/depositModal/input/InputContract';
import InputCurrency from '../input/InputCurrency';

import useInstantiateContract from 'utilities/hooks/useInstantiateContract';

interface Props {
  setModalIsOpen: (arg0: boolean) => void;
}

function DepositModal({ setModalIsOpen }: Props) {
  const [amount, setAmount] = useState<number>(0);
  const handleValueChange = useCallback((amount) => {
    // eslint-disable-next-line
    console.log(amount);
    setAmount(amount);
  }, []);
  const {
    instantiateContract,
    txHashFromInstantiate,
    contract,
    setContract,
    txHashFromExecute
  } = useInstantiateContract();

  return (
    <ModalHolder>
      <Modal>
        <CloseButton onClick={() => setModalIsOpen(false)}>x</CloseButton>
        <Header>Degen Stable Farm</Header>
        <InputContract contract={contract} setContract={setContract} />
        <p>Current Contract Address: {contract}</p>
        <p>tx for contract instantiation</p>
        <TxHashLink txHash={txHashFromInstantiate?.txhash} />
        <p>tx for deposit</p>
        <TxHashLink txHash={txHashFromExecute} />
        <InputCurrency
          max={100000000000}
          onValueChange={handleValueChange}
          style={{ textAlign: 'center' }}
          value={amount}
        />
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
  width: 64%;
  z-index: 6;
  pointer-events: auto;
  filter: blur(0) !important;
`;

const Modal = styled.div`
  padding: 4%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 60%;
  margin-left: 18%;
`;

export default DepositModal;
