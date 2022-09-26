import { useState, useCallback } from 'react';
import styled from 'styled-components';

import Button from 'components/basic/buttons/standard/Button';
import TxHashLink from 'components/body/availableOptions/optionCard/depositPanel/txHashLink/TxHashLink';
import InputContract from 'components/basic/input/InputContract';
import InputAmount from 'components/basic/input/InputAmount';

import AvailableAmount from 'components/body/availableOptions/optionCard/depositPanel/availableAmount/AvailableAmount';

import msgDeposit from 'utilities/messagesExecute/msgDeposit';
import useContract from 'hooks/useContract';
import { Coins } from '@terra-money/terra.js';
import {
  CreateTxFailed,
  Timeout,
  TxFailed,
  TxUnspecifiedError,
  useConnectedWallet,
  UserDenied
} from '@terra-money/wallet-provider';
import Selector from 'components/body/availableOptions/optionCard/depositPanel/selector/Selector';

import { useRecoilValue } from 'recoil';
import assetToBorrowAtom from 'recoil/assetToBorrow/atom';

import tokenFactory from 'utilities/messagesQuery/tokenFactory';
import { TOKEN_FACTORY } from 'utilities/variables';
import InputLoop from 'components/basic/input/InputLoop';
import loopAmountAtom from 'recoil/loopAmount/atom';

interface Props {
  instantiateContract: any;
  txHashFromInstantiate: any;
  contractToDeposit: string;
  setContractToDeposit: (arg0: string) => void;
  contractFromInstantiation: string;
  setContractFromInstantiation: (arg0: string) => void;
  txHashFromExecuteInstantiate: any;
}

function DepositPanel({
  instantiateContract,
  txHashFromInstantiate,
  contractToDeposit,
  setContractToDeposit,
  contractFromInstantiation,
  setContractFromInstantiation,
  txHashFromExecuteInstantiate
}: Props) {
  const assetToBorrow = useRecoilValue(assetToBorrowAtom);
  const loopAmount = useRecoilValue(loopAmountAtom);
  const [txError, setTxError] = useState<string | null>(null);
  const [amount, setAmount] = useState<number>(0);
  const { executeMsg, txHashFromExecute, queryMsg } = useContract();
  const connectedWallet = useConnectedWallet();
  const [depositPanelIsOpen, setDepositPanelIsOpen] = useState<boolean>(false);

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
        const pairResponse: any = await queryMsg(
          TOKEN_FACTORY,
          tokenFactory(assetToBorrow)
        );
        const amountInCoin: Coins.Input = { uusd: amount * Math.pow(10, 6) };
        const deposit = msgDeposit(
          assetToBorrow,
          pairResponse.contract_addr,
          loopAmount
        );
        return await executeMsg(contract, deposit, amountInCoin);
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
    [connectedWallet, assetToBorrow, loopAmount]
  );

  const handleDeposit = async (amount: any, contract: string) => {
    return await executeDeposit(amount, contract);
  };

  return (
    <Deposit>
      <InputAmount
        amount={Number(amount)}
        setAmount={setAmount}
        label="Deposit UST:"
      />
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
        <LinkAdvanced
          onClick={() => setDepositPanelIsOpen(!depositPanelIsOpen)}
        >
          👷
        </LinkAdvanced>
      </DepositButtons>
      {depositPanelIsOpen ? (
        <StyledAdvanced>
          <StyledAdvancedAngle>ADVANCED!</StyledAdvancedAngle>
          <Selector />
          <p>{assetToBorrow}</p>
          <InputLoop />
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
          <InstantiateButton
            children="Instantiate Contract"
            disabled={false}
            onClick={async () => {
              return await instantiateContract(amount);
            }}
          />
        </StyledAdvanced>
      ) : null}
    </Deposit>
  );
}
const DepositButtons = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-evenly;
  margin-top: 25%;
  width: 100%;
`;

const StyledAdvanced = styled.div`
  border: 3px dashed #444;
  padding: 7%;
  margin: 0px;
`;

const DepositButton = styled(Button)`
  align-self: center;
  width: auto;
  cursor: pointer;
  margin-right: 5%;
  letter-spacing: 2px;
`;
const InstantiateButton = styled(Button)`
  color: ${(props) => `${props.theme.colors.color3}`};
  text-decoration: none;
  width: auto;
  background: linear-gradient(hsl(203, 25%, 8%), hsl(203, 50%, 0%));
  text-align: center;
  border-top: 1px solid hsl(215, 5%, 50%);
  border-right: 1px solid hsl(215, 5%, 25%);
  border-left: 1px solid hsl(215, 5%, 25%);
  border-bottom: 1px solid hsl(215, 4%, 15%);
  border-radius: 1.375rem;
  letter-spacing: 2px;
  cursor: pointer;
  display: inline-block;
  align-self: flex-end;
`;

const LinkAdvanced = styled.button`
  color: ${(props) => `${props.theme.colors.color3}`};
  display: block;
  font-size: 2em;
  text-decoration: none;
  width: 25%;
  background: linear-gradient(hsl(203, 25%, 58%), hsl(265, 30%, 32%));
  padding-bottom: 5%;
  text-align: center;
  border-top: 1px solid hsl(215, 5%, 50%);
  border-right: 1px solid hsl(215, 5%, 25%);
  border-left: 1px solid hsl(215, 5%, 25%);
  border-bottom: 1px solid hsl(215, 4%, 15%);
  border-radius: 1.375rem;
  cursor: not-allowed;
`;

const Deposit = styled.div`
  padding: 4%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 70%;
  margin-left: 10%;
`;

const StyledAdvancedAngle = styled.h2`
  text-transform: uppercase;
  transform: translate(-50%, -50%) skew(10deg) rotate(-10deg);
  font-size: 2vw;
  position: absolute;
  margin-top: -1%;
  text-rendering: optimizeLegibility;
  font-weight: 900;
  color: ${(props) => `${props.theme.colors.color2}`};
  text-shadow: 1px 4px 6px black, 2px 0 0 gold, 1px 2px 4px white;
  white-space: nowrap;

  &:before {
    content: attr(data-heading);
    position: absolute;
    left: 0;
    top: -4.8%;
    overflow: hidden;
    width: 100%;
    height: 50%;
    color: #fbf7f4;
    transform: translate(1.6vw, 0) skew(-13deg) scale(1, 1.2);
    z-index: 2;
    text-shadow: 2px -1px 6px rgba(0, 0, 0, 0.2);
  }

  &:after {
    position: absolute;
    content: attr(data-heading);
    left: 0;
    top: 0;
    overflow: hidden;
    width: 20%;
    height: 20%;
    z-index: 1;
    color: #d3cfcc;
    transform: translate(0vw, 0) skew(13deg) scale(1, 0.8);
    clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0% 100%);
    text-shadow: 2px -1px 6px rgba(0, 0, 0, 0.3);
  }
`;

export default DepositPanel;
