import { useState } from 'react';

import {
  useWallet,
  TxResult,
  ConnectedWallet
} from '@terra-money/wallet-provider';
import { Coins, Msg, MsgExecuteContract } from '@terra-money/terra.js';
import { terra } from 'utilities/lcd';

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

      const result: void | TxResult = await post({ msgs: [msg] })
        .then(async (result) => {
          // TODO: use a for or add a timeout to prevent infinite loops
          //eslint-disable-next-line
          while (true) {
            // query txhash
            const data = await terra.tx
              .txInfo(result.result.txhash)
              .catch(() => {}); //eslint-disable-line
            // if hash is onchain return data
            if (data) return data;
            // else wait 250ms and then repeat
            await new Promise((resolve) => setTimeout(resolve, 250));
          }
        })
        .then((txresult: any) => {
          // this will be executed when the tx has been included into a block
          const txHash = txresult.txhash;
          localStorage.setItem('txHashDeposit', txHash);
          localStorage.setItem(
            'position_idx',
            txresult.logs[0].eventsByType.from_contract.position_idx[0]
          );
          return setTxHashFromExecute(txHash);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const queryMsg = async (contractAddress: string, msgQuery: object) => {
    try {
      return await terra.wasm.contractQuery(contractAddress, {
        query: msgQuery
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    executeMsg,
    queryMsg,
    txHashFromExecute,
    setTxHashFromExecute
  };
};

export default useContract;
