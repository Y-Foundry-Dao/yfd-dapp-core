import { useWallet, useConnectedWallet } from '@terra-money/wallet-provider';
import { Coins, Msg, MsgExecuteContract } from '@terra-money/terra.js';
import { MyLCD } from '@utilities/MyValues';
import useTx from './useTx';
import { useSetRecoilState } from 'recoil';
import txHashAtom from 'recoil/txHash/atom';
import queryNftInfo from 'utilities/messagesQuery/proposals/vaultProposal/queryNftInfo';

const useMsg = () => {
  const lcd = MyLCD();
  const chainID = useWallet().network.chainID;
  const { post } = useWallet();
  const { toastError } = useTx();
  const setTxHashInRecoil = useSetRecoilState(txHashAtom);
  const connectedWallet = useConnectedWallet();

  // custom executeMsg function
  // Takes 4 parameters
  // connectedWallet - comes from wallet-provider
  // contractAddress - address of the contract you want to execute your message on
  // msgExecute - the message you want to send to the contract to execute
  // amount - the amount you want to send with the message
  const executeMsg = async (
    contractAddress: string,
    msgExecute: object,
    amount: Coins.Input = {}
  ) => {
    try {
      // Creates a new message with our parameters
      if (!connectedWallet) {
        return;
      }
      const msg: Msg = new MsgExecuteContract(
        connectedWallet.walletAddress,
        contractAddress,
        msgExecute,
        amount
      );

      // posts the message to the blockchain
      const tx = await post({ msgs: [msg] })
        .then(async (result) => {
          // TODO: use a for or add a timeout to prevent infinite loops
          //eslint-disable-next-line
          while (true) {
            // query txhash
            // Causes errors in console because it hits the catch statement until the transaction has been broadcast
            // console.log(result.result);
            const data = await lcd.tx
              .txInfo(result.result.txhash)
              .catch((error) => {
                setTxHashInRecoil('Waiting for TX to Broadcast...');
                console.log('Inside catch', error);
              }); //eslint-disable-line
            // if hash is onchain return data
            if (data) return data;
            // else wait 250ms and then repeat
            await new Promise((resolve) => setTimeout(resolve, 250));
          }
        })
        .then((txresult: any) => {
          // this will be executed when the tx has been included into a block
          const txHash = txresult.txhash;
          setTxHashInRecoil(txHash);
          return txHash;
        });
      return tx;
    } catch (error) {
      toastError(error);
    }
  };

  // custom queryMsg function
  // takes 2 parameters
  // contractAddress - the contract address we would like to query
  // msgQuery - our query message we want to send to the API
  const queryMsg = async (contractAddress: string, msgQuery: object) => {
    try {
      if (contractAddress) {
        const queryResponse: any = await lcd.wasm.contractQuery(
          contractAddress,
          msgQuery
        );
        return queryResponse;
      }
    } catch (error: any) {
      if (
        error.response.data.message ===
        'cosmwasm_std::addresses::Addr not found: query wasm contract failed: invalid request'
      ) {
        // console.log({ addr: 'Contract Address Not Found' });
        return { addr: 'Contract Address Not Found' };
      }
    }
  };

  const queryContractInfo = async (contractAddress: string) => {
    try {
      if (contractAddress) {
        const queryResponse = await lcd.wasm.contractInfo(contractAddress);
        return queryResponse;
      }
    } catch (error: any) {
      if (
        error.response.data.message ===
        'cosmwasm_std::addresses::Addr not found: query wasm contract failed: invalid request'
      ) {
        return { addr: 'Contract Address Not Found' };
      }
    }
  };

  return {
    executeMsg,
    queryMsg,
    queryContractInfo
  };
};

export default useMsg;
