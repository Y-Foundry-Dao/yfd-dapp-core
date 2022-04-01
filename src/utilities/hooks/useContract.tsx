import { useWallet, TxResult } from '@terra-money/wallet-provider';
import { useState } from 'react';
import { Msg } from '@terra-money/terra.js';

const useContract = () => {
  const { post } = useWallet();

  const executeMsg = async (msg: Msg) => {
    try {
      const result: TxResult = await post({ msgs: [msg] });

      return result.result.txhash;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    executeMsg
  };
};

export default useContract;
