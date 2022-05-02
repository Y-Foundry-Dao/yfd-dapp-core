import { Coins } from '@terra-money/terra.js';
import useContractDGSF from './useContractDGSF';
import { AUST, MBTC } from 'utilities/variables';
import Base64 from 'utilities/base64';
import msgPositionDeposit from 'utilities/messagesExecute/msgPositionDeposit';
import msgCW20Send from 'utilities/messagesExecute/msgCW20Send';
import msgPositionBorrow from 'utilities/messagesExecute/msgPositionBorrow';
import msgPositionWithdraw from 'utilities/messagesExecute/msgPositionWithdraw';
import msgMirrorDepositEncode from 'utilities/messagesToEncode/msgMirrorEncodeDeposit';
import msgMirrorBurnEncode from 'utilities/messagesToEncode/msgMirrorEncodeBurn';

const useHandleClicks = () => {
  const { executeMsg } = useContractDGSF();

  const handleClickDGSFDeposit = async (
    contract: string,
    position: string,
    amount: number
  ) => {
    const amountInCoin: Coins.Input = { uusd: amount * Math.pow(10, 6) };
    const msgAddToPosition = msgPositionDeposit(position);
    return await executeMsg(contract, msgAddToPosition, amountInCoin);
  };

  const handleClickMirrorDeposit = async (
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
      contract,
      encodedMessage,
      amountConverted
    );
    return await executeMsg(AUST, msgMirrorDeposit);
  };

  const handleClickMirrorBurn = async (
    contract: string,
    position: string,
    amount: number
  ) => {
    const amountConverted: number = amount * Math.pow(10, 6);
    const msgToEncode = msgMirrorBurnEncode(position);
    const encodedMessage = Base64.btoa(msgToEncode);
    const msgMirrorBurn = msgCW20Send(
      contract,
      encodedMessage,
      amountConverted
    );
    return await executeMsg(MBTC, msgMirrorBurn);
  };

  const handleClickMirrorBorrow = async (
    contract: string,
    position: string,
    amount: number
  ) => {
    const amountInCoin: number = amount * Math.pow(10, 6);
    const msgBorrowFromPosition = msgPositionBorrow(
      MBTC,
      position,
      amountInCoin
    );
    return await executeMsg(contract, msgBorrowFromPosition);
  };

  const handleClickMirrorWithdraw = async (
    contract: string,
    position: string,
    amount: number
  ) => {
    const amountInCoin: number = amount * Math.pow(10, 6);
    const msgWithdrawFromPosition = msgPositionWithdraw(
      contract,
      position,
      amountInCoin
    );
    return await executeMsg(contract, msgWithdrawFromPosition);
  };

  return {
    handleClickMirrorDeposit,
    handleClickMirrorBurn,
    handleClickMirrorBorrow,
    handleClickMirrorWithdraw,
    handleClickDGSFDeposit
  };
};

export default useHandleClicks;
