import { Coins } from '@terra-money/terra.js';
import useContract from './useContract';
import { AUST, FORGE_TEST, MBTC, YFD_TEST } from 'utilities/variables';
import Base64 from 'utilities/base64';
import msgPositionDeposit from 'utilities/messagesExecute/msgPositionDeposit';
import msgCW20Send from 'utilities/messagesExecute/msgCW20Send';
import msgPositionBorrow from 'utilities/messagesExecute/msgPositionBorrow';
import msgPositionWithdraw from 'utilities/messagesExecute/msgPositionWithdraw';
import msgMirrorDepositEncode from 'utilities/messagesToEncode/msgMirrorEncodeDeposit';
import msgMirrorBurnEncode from 'utilities/messagesToEncode/msgMirrorEncodeBurn';

import tokenFactory from 'utilities/messagesQuery/tokenFactory';
import { TOKEN_FACTORY } from 'utilities/variables';

import useQuery from './useQuery';
import { useRecoilValue } from 'recoil';
import loopAmountAtom from 'recoil/loopAmount/atom';
import msgEncodedStake from 'utilities/messagesToEncode/msgEncodedStake';
import msgStakeYFD from 'utilities/messagesExecute/msgStakeYFD';

const useHandleClicks = () => {
  const loopAmount = useRecoilValue(loopAmountAtom);
  const { executeMsg, queryMsg, setTxHashFromExecute } = useContract();

  const { queryPositionState } = useQuery();

  const handleClickDGSFDeposit = async (
    contract: string,
    position: string,
    amount: number
  ) => {
    const amountInCoin: Coins.Input = { uusd: amount * Math.pow(10, 6) };

    const positionState: any = await queryPositionState(position, contract);
    const assetToUpdate = positionState.asset.info.token.contract_addr;

    const pairResponse: any = await queryMsg(
      TOKEN_FACTORY,
      tokenFactory(assetToUpdate)
    );
    const assetPair = pairResponse.contract_addr;
    console.log(loopAmount);
    const msgAddToPosition = msgPositionDeposit(
      assetToUpdate,
      assetPair,
      loopAmount,
      position
    );
    return await executeMsg(contract, msgAddToPosition, amountInCoin);
  };

  const handleClickStakeYFD = async (amount: number) => {
    const amountConverted: number = amount * Math.pow(10, 6);
    // parameter is stake lock duration and set to maximum time
    const msgToEncode = msgEncodedStake(10512000);
    const encodedMessage = Base64.btoa(msgToEncode);
    const msgStakeYFDToken = msgStakeYFD(
      FORGE_TEST,
      amountConverted,
      encodedMessage
    );
    // YFD will always be staked to the YFD contract.
    // Therefore it does not need user input.
    // For now the contract is hard coded to testnet but can be made dynamic later
    // By detecting what network we are from and using the appropriate networks contract from there
    const tx = await executeMsg(YFD_TEST, msgStakeYFDToken);
    console.log(tx);
    setTxHashFromExecute(tx);
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
    handleClickDGSFDeposit,
    handleClickStakeYFD
  };
};

export default useHandleClicks;
