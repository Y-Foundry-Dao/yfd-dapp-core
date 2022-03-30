import { useWallet, TxResult } from '@terra-money/wallet-provider';
import { useState } from 'react';
import { Msg } from '@terra-money/terra.js';

const useContract = () => {
  const { post } = useWallet();
  const [tx, setTx] = useState('');

  const executeMsg = async (msg: Msg) => {
    try {
      const result: TxResult = await post({ msgs: [msg] });
      return setTx(result.result.txhash);
    } catch (error) {
      console.log(error);
    }
  };

  const clearTx = () => {
    return setTx('');
  };

  return {
    executeMsg,
    clearTx,
    tx,
    setTx
  };
};

export default useContract;
