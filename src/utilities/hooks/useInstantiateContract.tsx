import { useCallback, useState } from 'react';
import {
  Fee,
  BlockTxBroadcastResult,
  MsgInstantiateContract,
  MsgExecuteContract
} from '@terra-money/terra.js';
import {
  createLCDClient,
  CreateTxFailed,
  SignResult,
  Timeout,
  TxFailed,
  TxUnspecifiedError,
  useConnectedWallet,
  UserDenied
} from '@terra-money/wallet-provider';

import instantiateMsg from 'utilities/instantiateMsg';
import msgQuery from 'utilities/msgQuery';
import useContract from './useContract';

const useInstantiateContract = () => {
  const [signResult, setSignResult] = useState<SignResult | null>(null);
  const [txHashInstantiate, setTxHashInstantiate] =
    useState<BlockTxBroadcastResult | null>(null);
  const [txError, setTxError] = useState<string | null>(null);
  const [contract, setContract] = useState('');
  const [txHashDeposit, setTxHashDeposit] = useState('');

  const { executeMsg } = useContract();
  const connectedWallet: any = useConnectedWallet();

  const instantiateContract = useCallback(async () => {
    try {
      const instantiate = new MsgInstantiateContract(
        connectedWallet.walletAddress,
        connectedWallet.walletAddress,
        58705,
        instantiateMsg
      );

      if (!connectedWallet) {
        return;
      }

      if (connectedWallet.network.chainID.startsWith('columbus')) {
        alert(`Please only execute this example on Testnet`);
        return;
      }

      setSignResult(null);
      setTxHashInstantiate(null);
      setTxError(null);

      const nextSignResult = await connectedWallet.sign({
        fee: new Fee(1000000, '200000uusd'),
        msgs: [instantiate]
      });

      setSignResult(nextSignResult);

      const txResultFromSign = await nextSignResult.result;
      const lcd = createLCDClient({ network: connectedWallet.network });
      const nextTxResult = await lcd.tx.broadcast(txResultFromSign);

      console.log(nextTxResult);
      setTxHashInstantiate(nextTxResult);
      console.log(nextTxResult.logs[0].events[0].attributes[3].value);
      setContract(nextTxResult.logs[0].events[0].attributes[3].value);

      const msg = new MsgExecuteContract(
        connectedWallet.walletAddress,
        nextTxResult.logs[0].events[0].attributes[3].value,
        msgQuery,
        { uusd: 50000000 }
      );

      const txHashDep: any = await executeMsg(msg);
      setTxHashDeposit(txHashDep);
      return txHashDeposit;
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
  }, [connectedWallet]);

  return {
    instantiateContract,
    txHashInstantiate,
    contract,
    setContract,
    txHashDeposit,
    setTxHashDeposit
  };
};

export default useInstantiateContract;
