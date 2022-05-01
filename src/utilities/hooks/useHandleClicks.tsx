import { Coins } from '@terra-money/terra.js';
import useContractDGSF from './useContractDGSF';
import { AUST, MBTC } from 'utilities/variables';
import Base64 from 'utilities/base64';
import msgPositionDeposit from 'utilities/messagesExecute/msgPositionDeposit';
import msgCW20Send from 'utilities/messagesExecute/msgCW20Send';
import msgPositionBorrow from 'utilities/messagesExecute/msgPositionBorrow';
import msgPositionWithdraw from 'utilities/messagesExecute/msgPositionWithdraw';
import msgMirrorDepositEncode from 'utilities/messagesToEncode/msgMirrorDepositEncode';
import msgMirrorBurnEncode from 'utilities/messagesToEncode/msgMirrorBurnEncode';

const useHandleClicks = () => {
  const { executeMsg } = useContractDGSF();

  const handleClickDepositDgsf = async (
    amount: number,
    contract: string,
    position: string
  ) => {
    const amountInCoin: Coins.Input = { uusd: amount * Math.pow(10, 6) };
    const msgAddToPosition = msgPositionDeposit(position);
    return await executeMsg(contract, msgAddToPosition, amountInCoin);
  };

  const handleClickDepositMirror = async (
    contract: string,
    position: string,
    amount: number
  ) => {
    const amountConverted: number = amount * Math.pow(10, 6);
    const msgToEncode = msgMirrorDepositEncode(
      contract,
      position,
      amountConverted
    );
    const encodedMessage = Base64.btoa(msgToEncode);
    const msgMirrorDeposit = msgCW20Send(
      encodedMessage,
      amountConverted,
      contract
    );
    return await executeMsg(AUST, msgMirrorDeposit);
  };

  const handleClickRepayPosition = async (
    amount: number,
    position: string,
    contract: string
  ) => {
    const amountConverted: number = amount * Math.pow(10, 6);
    const msgToEncode = msgMirrorBurnEncode(position);
    const encodedMessage = Base64.btoa(msgToEncode);
    const msgMirrorBurn = msgCW20Send(
      encodedMessage,
      amountConverted,
      contract
    );
    return await executeMsg(MBTC, msgMirrorBurn);
  };

  const handleClickBorrowFromPosition = async (
    contract: string,
    amount: number,
    position: string
  ) => {
    const amountInCoin: number = amount * Math.pow(10, 6);
    const msgBorrowFromPosition = msgPositionBorrow(
      MBTC,
      amountInCoin,
      position
    );
    return await executeMsg(contract, msgBorrowFromPosition);
  };

  const handleClickWithdrawFromPosition = async (
    contract: string,
    amount: number,
    position: string
  ) => {
    const amountInCoin: number = amount * Math.pow(10, 6);
    const msgWithdrawFromPosition = msgPositionWithdraw(
      contract,
      amountInCoin,
      position
    );
    return await executeMsg(contract, msgWithdrawFromPosition);
  };

  return {
    handleClickDepositMirror,
    handleClickRepayPosition,
    handleClickBorrowFromPosition,
    handleClickWithdrawFromPosition,
    handleClickDepositDgsf
  };
};

export default useHandleClicks;
