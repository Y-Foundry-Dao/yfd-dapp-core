import { useState, useCallback } from 'react';
import styled from 'styled-components';

import Button from 'components/buttons/basic/Button';
import TxHashLink from 'components/depositModal/txHash/TxHashLink';
import InputContract from 'components/depositModal/input/InputContract';
import InputAmount from 'components/depositModal/input/InputAmount';

import useQuery from 'utilities/hooks/useQuery';
import AvailableAmount from '../availableAmount/AvailableAmount';

import msgDeposit from 'utilities/messagesExecute/msgDeposit';
import useContract from 'utilities/hooks/useContractDGSF';
import { Coins } from '@terra-money/terra.js';
import {
  CreateTxFailed,
  Timeout,
  TxFailed,
  TxUnspecifiedError,
  useConnectedWallet,
  UserDenied
} from '@terra-money/wallet-provider';

interface Props {
  setModalIsOpen: (arg0: boolean) => void;
  instantiateContract: any;
  txHashFromInstantiate: any;
  contractToDeposit: string;
  setContractToDeposit: (arg0: string) => void;
  contractFromInstantiation: string;
  setContractFromInstantiation: (arg0: string) => void;
  txHashFromExecuteInstantiate: any;
}

function DepositModal({
  setModalIsOpen,
  instantiateContract,
  txHashFromInstantiate,
  contractToDeposit,
  setContractToDeposit,
  contractFromInstantiation,
  setContractFromInstantiation,
  txHashFromExecuteInstantiate
}: Props) {
  const [txError, setTxError] = useState<string | null>(null);
  const [amount, setAmount] = useState<number>(0);
  const { queryAllPositions } = useQuery();
  const { executeMsg, txHashFromExecute } = useContract();
  const connectedWallet = useConnectedWallet();

  const executeDeposit = useCallback(
    async (amount: number, contract: string) => {
      try {
        if (!connectedWallet) {
          return;
        }
        if (connectedWallet.network.chainID.startsWith('columbus')) {
          alert(`Please only execute this example on Testnet`);
          return;
        }
        const amountInCoin: Coins.Input = { uusd: amount * Math.pow(10, 6) };
        return await executeMsg(
          connectedWallet,
          contract,
          msgDeposit,
          amountInCoin
        );
      } catch (error) {
        if (error instanceof UserDenied) {
          setTxError('User Denied');
        } else if (error instanceof CreateTxFailed) {
          setTxError('Create Tx Failed: ' + error.message);
        } else if (error instanceof TxFailed) {
          setTxError('Tx Failed: ' + error.message);
        } else if (error instanceof Timeout) {
          setTxError('Timeout');
        } else if (error instanceof TxUnspecifiedError) {
          setTxError('Unspecified Error: ' + error.message);
        } else {
          setTxError(
            'Unknown Error: ' +
              (error instanceof Error ? error.message : String(error))
          );
        }
      }
    },
    [connectedWallet]
  );

  const handleClick = async () => {
    return await queryAllPositions(contractToDeposit).then(() =>
      setModalIsOpen(false)
    );
  };

  const handleDeposit = async (amount: any, contract: string) => {
    return await executeDeposit(amount, contract);
  };

  return (
    <ModalHolder>
      <Modal>
        <CloseButton onClick={handleClick}>x</CloseButton>
        <Header>Degen Stable Farm</Header>
        <InputContract
          contract={
            contractFromInstantiation
              ? contractFromInstantiation
              : contractToDeposit
          }
          setContract={
            contractFromInstantiation
              ? setContractFromInstantiation
              : setContractToDeposit
          }
        />
        <p>tx for contract instantiation</p>
        <TxHashLink txHash={txHashFromInstantiate?.txhash} />
        <p>tx for deposit</p>
        <TxHashLink
          txHash={
            txHashFromExecuteInstantiate
              ? txHashFromExecuteInstantiate
              : txHashFromExecute
          }
        />
        <InputAmount amount={Number(amount)} setAmount={setAmount} />
        <AvailableAmount setAmount={setAmount} />
        <DepositButtons>
          <DepositButton
            children="open position"
            disabled={false}
            onClick={async () => {
              return await handleDeposit(
                amount,
                contractFromInstantiation
                  ? contractFromInstantiation
                  : contractToDeposit
              );
            }}
          />
          <InstantiateButton
            children="Instantiate Contract"
            disabled={false}
            onClick={async () => {
              return await instantiateContract(amount);
            }}
          />
        </DepositButtons>
      </Modal>
    </ModalHolder>
  );
}
const DepositButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4%;
`;

const DepositButton = styled(Button)`
  align-self: center;
  width: 70%;
  cursor: pointer;
`;
const InstantiateButton = styled(Button)`
  align-self: flex-end;
  width: 30%;
  cursor: pointer;
  background: black;
  font-size: 0.6rem;
`;

const Header = styled.h2`
  align-self: center;
  margin-top: -4%;
  margin-bottom: 10%;
`;

const CloseButton = styled.button`
  color: ${(props) => `${props.theme.colors.color4}`};
  background-color: rgba(8, 6, 11, 0.9);
  border: none;
  position: relative;
  width: 30px;
  right: -110%;
  font-size: 1.4rem;
`;

const ModalHolder = styled.div`
  position: fixed;
  left: 18%;
  top: 0%;
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
