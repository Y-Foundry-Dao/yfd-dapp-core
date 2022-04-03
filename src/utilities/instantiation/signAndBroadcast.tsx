import { ConnectedWallet, createLCDClient } from '@terra-money/wallet-provider';
import instantiateContractMsg from 'utilities/instantiation/instantiateContractMsg';

const signAndBroadcast = async (connectedWallet: ConnectedWallet) => {
  const lcd = createLCDClient({ network: connectedWallet.network });
  const instantiateMsg = instantiateContractMsg(connectedWallet.walletAddress);
  const signResult = await connectedWallet.sign({
    msgs: [instantiateMsg]
  });

  const txResultFromSign = signResult.result;

  const TxResultFromBroadcast = await lcd.tx.broadcast(txResultFromSign);
  return TxResultFromBroadcast;
};

export default signAndBroadcast;
