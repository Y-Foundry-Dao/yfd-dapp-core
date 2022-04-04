import { useState } from 'react';
import styled from 'styled-components';

import DepositButton from 'components/buttons/deposit/DepositButton';
import TxHashLink from 'components/openNewPosition/txHash/TxHashLink';
import InputContract from 'components/openNewPosition/input/InputContract';
import InputAmount from 'components/openNewPosition/input/InputAmount';

import useInstantiateContract from 'utilities/hooks/useInstantiateContract';

interface Props {
  setModalIsOpen: (arg0: boolean) => void;
}

function DepositModal({ setModalIsOpen }: Props) {
  const [amount, setAmount] = useState<number>(0);
  const {
    instantiateContract,
    txHashFromInstantiate,
    contract,
    setContract,
    txHashFromExecute
  } = useInstantiateContract();

  return (
    <Modal>
      <button onClick={() => setModalIsOpen(false)}>x</button>
      <InputContract contract={contract} setContract={setContract} />
      <p>Current Contract Address: {contract}</p>
      <p>tx for contract instantiation</p>
      <TxHashLink txHash={txHashFromInstantiate?.txhash} />
      <p>tx for deposit</p>
      <TxHashLink txHash={txHashFromExecute} />
      <InputAmount amount={amount} setAmount={setAmount} />
      <DepositButton
        children="open position"
        disabled={false}
        onClick={async () => {
          return await instantiateContract(amount);
        }}
      />
    </Modal>
  );
}

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  background: black;
  width: 40%;
  left: 30%;
  padding: 2%;
`;

export default DepositModal;
