import { useCallback, useState } from 'react';
import { BlockTxBroadcastResult, Coins } from '@terra-money/terra.js';
import {
  CreateTxFailed,
  Timeout,
  TxFailed,
  TxUnspecifiedError,
  useConnectedWallet,
  UserDenied
} from '@terra-money/wallet-provider';

import msgDeposit from 'utilities/messagesExecute/msgDeposit';
import useContract from 'utilities/hooks/useContractDGSF';
import signAndBroadcast from 'utilities/instantiation/signAndBroadcast';

const useInstantiateContract = () => {
  const [txHashFromInstantiate, setTxHashFromInstantiate] = useState<
    BlockTxBroadcastResult | null | string
  >(null);
  const [txError, setTxError] = useState<string | null>(null);
  const [contract, setContract] = useState<string>('');

  const { executeMsg, txHashFromExecute } = useContract();
  const connectedWallet = useConnectedWallet();

  const instantiateContract = useCallback(
    async (amount: number) => {
      try {
        if (!connectedWallet) {
          return;
        }
        if (connectedWallet.network.chainID.startsWith('columbus')) {
          alert(`Please only execute this example on Testnet`);
          return;
        }
        setTxHashFromInstantiate('Waiting for Terra Station');
        const TxResult = await signAndBroadcast(connectedWallet);
        setTxHashFromInstantiate(TxResult);

        const contractAddress = TxResult.logs[0].events[1].attributes[3].value;
        localStorage.setItem('contractAddress', contractAddress);
        setContract(contractAddress);

        const amountInCoin: Coins.Input = { uusd: amount * Math.pow(10, 6) };
        return await executeMsg(
          connectedWallet,
          contractAddress,
          msgDeposit,
          amountInCoin
        );
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
    [connectedWallet]
  );

  return {
    instantiateContract,
    txHashFromInstantiate,
    contract,
    setContract,
    txHashFromExecute
  };
};

export default useInstantiateContract;
