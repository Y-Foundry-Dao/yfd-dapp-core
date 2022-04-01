import { Fee, SyncTxBroadcastResult } from '@terra-money/terra.js';
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
import { useCallback, useState } from 'react';
import { MsgInstantiateContract } from '@terra-money/terra.js';

import instantiateMsg from 'utilities/instantiateMsg';
import useWalletAddress from './useWalletAddress';

const useInstantiateContract = () => {
  const [signResult, setSignResult] = useState<SignResult | null>(null);
  const [txResult, setTxResult] = useState<SyncTxBroadcastResult | null>(null);
  const [txError, setTxError] = useState<string | null>(null);

  const connectedWallet: any = useConnectedWallet();

  const instantiateContract = useCallback(() => {
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
    setTxResult(null);
    setTxError(null);

    connectedWallet
      .sign({
        fee: new Fee(1000000, '200000uusd'),
        msgs: [instantiate]
      })
      .then((nextSignResult: SignResult) => {
        setSignResult(nextSignResult);

        // broadcast
        const tx = nextSignResult.result;

        const lcd = createLCDClient({ network: connectedWallet.network });

        return lcd.tx.broadcastSync(tx);
      })
      .then((nextTxResult: SyncTxBroadcastResult) => {
        setTxResult(nextTxResult);
      })
      .catch((error: unknown) => {
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
      });
  }, [connectedWallet]);

  return { instantiateContract, txResult };
};

export default useInstantiateContract;
