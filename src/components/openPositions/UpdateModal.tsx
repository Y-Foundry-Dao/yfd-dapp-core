import { useState } from 'react';
import styled from 'styled-components';

import Button from 'components/buttons/basic/Button';
import InputAmount from 'components/depositModal/input/InputAmount';

import { MBTC, AUST, MBTC_UST } from 'utilities/variables';
import useContract from 'utilities/hooks/useContractDGSF';
import { Coins } from '@terra-money/terra.js';
import { useConnectedWallet } from '@terra-money/wallet-provider';
import Base64 from 'utilities/base64';

interface Props {
  position: string;
  contract: string;
  modalIsOpen: boolean;
  positionToUpdate: string;
  setModalIsOpen: (arg0: boolean) => void;
}

interface StyledProps {
  position: string;
  positionToUpdate: string;
}

function UpdateModal({
  position,
  contract,
  positionToUpdate,
  setModalIsOpen
}: Props) {
  const { executeMsg } = useContract();
  const connectedWallet: any = useConnectedWallet();
  const [amountToDepositDgsf, setAmountToDepositDgsf] = useState<any>(0);
  const [amountToBorrow, setAmountToBorrow] = useState<any>(0);
  const [amountToWithdraw, setAmountToWithdraw] = useState<any>(0);
  const [amountToBurn, setAmountToBurn] = useState<any>(0);
  const [amountToDepositMirror, setAmountToDepositMirror] = useState<any>(0);

  const handleClick = async () => {
    return setModalIsOpen(false);
  };

  const handleClickDepositDgsf = async (amount: number, position: string) => {
    const amountInCoin: Coins.Input = { uusd: amount * Math.pow(10, 6) };
    const msgAddToPosition = {
      deposit: {
        loops: '4',
        asset: MBTC,
        asset_pair: MBTC_UST,
        collateral_ratio: '2.5',
        position_idx: position
      }
    };
    return await executeMsg(
      connectedWallet,
      contract,
      msgAddToPosition,
      amountInCoin
    );
  };

  const handleClickDepositMirror = async (
    amount: number,
    position: string,
    contract: string
  ) => {
    const amountConverted: number = amount * Math.pow(10, 6);

    const msgToEncode = `{
      "deposit": {
        "position_idx": "${position}",
        "collateral": {
          "amount": "${amountConverted}",
          "info": {
            "token": {
              "contract_addr": "${AUST}"
            }
          }
        }
      }
    }`;

    const encodedMessage = Base64.btoa(msgToEncode);
    const msgDepositMirror = {
      send: {
        msg: encodedMessage,
        amount: String(amountConverted),
        contract: contract
      }
    };

    return await executeMsg(connectedWallet, AUST, msgDepositMirror);
  };

  const handleClickRepayPosition = async (
    amount: number,
    position: string,
    contract: string
  ) => {
    const amountConverted: number = amount * Math.pow(10, 6);

    const msgToEncode = `{
      "burn": {
        "position_idx": "${position}"
      }
    }`;

    const encodedMessage = Base64.btoa(msgToEncode);

    const msgBurnMirror = {
      send: {
        msg: encodedMessage,
        amount: String(amountConverted),
        contract: contract
      }
    };
    return await executeMsg(connectedWallet, MBTC, msgBurnMirror);
  };

  const handleClickBorrowFromPosition = async (
    amount: number,
    position: string
  ) => {
    const amountInCoin: number = amount * Math.pow(10, 6);
    const msgBorrowFromPosition = {
      mirror: {
        mint: {
          asset: {
            info: {
              token: {
                contract_addr: MBTC
              }
            },
            amount: String(amountInCoin)
          },
          position_idx: position
        }
      }
    };
    return await executeMsg(connectedWallet, contract, msgBorrowFromPosition);
  };

  const handleClickWithdrawFromPosition = async (
    amount: number,
    position: string
  ) => {
    const amountInCoin: number = amount * Math.pow(10, 6);
    const msgWithdrawFromPosition = {
      mirror: {
        withdraw: {
          collateral: {
            info: {
              token: {
                contract_addr: AUST
              }
            },
            amount: String(amountInCoin)
          },
          position_idx: position
        }
      }
    };
    return await executeMsg(connectedWallet, contract, msgWithdrawFromPosition);
  };

  return (
    <ModalHolder position={position} positionToUpdate={positionToUpdate}>
      <Modal>
        <CloseButton onClick={handleClick}>x</CloseButton>
        <Header>Degen Stable Farm ID: {position}</Header>

        <InputAmount
          amount={Number(amountToDepositDgsf)}
          setAmount={setAmountToDepositDgsf}
          label="Add UST to position with default deposit parameters (4 loops, 2.5 collateral ratio):"
        />
        <Button
          children="Add to Position"
          disabled={false}
          onClick={async () => {
            return await handleClickDepositDgsf(
              amountToDepositDgsf,
              positionToUpdate
            );
          }}
        />

        <InputAmount
          amount={amountToBorrow}
          setAmount={setAmountToBorrow}
          label="Borrow mAsset"
        />
        <Button
          children="Borrow mAsset"
          disabled={false}
          onClick={async () => {
            return await handleClickBorrowFromPosition(
              Number(amountToBorrow),
              position
            );
          }}
        />

        <InputAmount
          amount={Number(amountToBurn)}
          setAmount={setAmountToBurn}
          label="Burn mAssets"
        />
        <Button
          children="Pay Back Debt"
          disabled={false}
          onClick={async () => {
            return await handleClickRepayPosition(
              amountToBurn,
              positionToUpdate,
              contract
            );
          }}
        />

        <InputAmount
          amount={amountToWithdraw}
          setAmount={setAmountToWithdraw}
          label="Withdraw aUST"
        />
        <Button
          children="Withdraw aUST"
          disabled={false}
          onClick={async () => {
            return await handleClickWithdrawFromPosition(
              Number(amountToWithdraw),
              position
            );
          }}
        />

        <InputAmount
          amount={Number(amountToDepositMirror)}
          setAmount={setAmountToDepositMirror}
          label="Deposit aUST"
        />
        <Button
          children="Deposit aUST"
          disabled={false}
          onClick={async () => {
            return await handleClickDepositMirror(
              amountToDepositMirror,
              positionToUpdate,
              contract
            );
          }}
        />
      </Modal>
    </ModalHolder>
  );
}

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

const ModalHolder = styled.div<StyledProps>`
  position: fixed;
  left: 18%;
  top: 0;
  background: rgba(8, 6, 11, 0.9);
  border-radius: 20px;
  width: 70%;
  pointer-events: auto;
  z-index: 2;
`;

const Modal = styled.div`
  padding: 4%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 70%;
  margin-left: 10%;
  pointer-events: auto;
`;

export default UpdateModal;
