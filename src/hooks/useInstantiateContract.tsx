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
import useContract from 'hooks/useContractDGSF';
import signAndBroadcast from 'utilities/instantiation/signAndBroadcast';

import { useRecoilValue } from 'recoil';
import assetToBorrowAtom from 'recoil/assetToBorrow/atom';

import tokenFactory from 'utilities/messagesQuery/tokenFactory';
import { TOKEN_FACTORY } from 'utilities/variables';

const useInstantiateContract = () => {
  const assetToBorrow = useRecoilValue(assetToBorrowAtom);
  const [txHashFromInstantiate, setTxHashFromInstantiate] = useState<
    BlockTxBroadcastResult | null | string
  >(null);
  const [txError, setTxError] = useState<string | null>(null);
  const [contractFromInstantiation, setContractFromInstantiation] =
    useState<string>('');

  const { executeMsg, queryMsg, txHashFromExecute } = useContract();
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

        const contractAddressFromInstantiate =
          TxResult.logs[0].events[1].attributes[3].value;
        setContractFromInstantiation(contractAddressFromInstantiate);

        const pairResponse: any = await queryMsg(
          TOKEN_FACTORY,
          tokenFactory(assetToBorrow)
        );
        const deposit = msgDeposit(assetToBorrow, pairResponse.contract_addr);
        const amountInCoin: Coins.Input = { uusd: amount * Math.pow(10, 6) };
        return await executeMsg(
          contractAddressFromInstantiate,
          deposit,
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
    [connectedWallet, assetToBorrow]
  );

  return {
    instantiateContract,
    txHashFromInstantiate,
    contractFromInstantiation,
    setContractFromInstantiation,
    txHashFromExecute
  };
};

export default useInstantiateContract;
