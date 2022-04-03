import { useState } from 'react';

import {
  useWallet,
  TxResult,
  ConnectedWallet
} from '@terra-money/wallet-provider';
import { Coins, Msg, MsgExecuteContract } from '@terra-money/terra.js';

const useContract = () => {
  const { post } = useWallet();
  const [txHashFromExecute, setTxHashFromExecute] = useState('');

  const executeMsg = async (
    connectedWallet: ConnectedWallet,
    contractAddress: string,
    msgQuery: object,
    amount: Coins.Input = {}
  ) => {
    try {
      const msg: Msg = new MsgExecuteContract(
        connectedWallet.walletAddress,
        contractAddress,
        msgQuery,
        amount
      );

      const result: TxResult = await post({ msgs: [msg] });
      return setTxHashFromExecute(result.result.txhash);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    executeMsg,
    txHashFromExecute,
    setTxHashFromExecute
  };
};

export default useContract;
