import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import { useConnectedWallet } from '@terra-money/wallet-provider';

import useContractForge from '@hooks/useContractForge';
import useChainInfo from '@hooks/useChainInfo';

import queryBalance from '@utilities/messagesQuery/cw20/queryBalance';
import queryMsg from '@utilities/messagesQuery/queryMsg';
import getChainDeploy from '@utilities/getValues';
import convertFromBase from 'utilities/converters/convertFromBase';

import { addressConnectedAtom } from '@recoil/connected/address/atoms';
import { currentBalanceYfdAtom } from '@recoil/connected/balance/atoms';
//import { selectFyfd, selectYFD } from '@recoil/connected/balance/selectors';

export const myChain = () => {
  const chainInfo = useChainInfo();
  console.log('chain DATA: ', chainInfo);

  return chainInfo.currentChainID;
};

export const myForge = () => {
  console.log('myChain: ', myChain());
  return getChainDeploy(myChain(), 'forge');
};

export const myGovToken = () => {
  return getChainDeploy(myChain(), 'token');
};

export const myAddress = () => {
  const [connectedAddress, setConnectedAddress] =
    useRecoilState(addressConnectedAtom);

  if (connectedAddress) {
    return connectedAddress;
  } else {
    const connectedWallet = useConnectedWallet();
    const walletAddress: any = connectedWallet?.walletAddress;
    setConnectedAddress(walletAddress); // sync recoil wallet value with the connected wallet
    return walletAddress;
  }
};

export const myYFD = async () => {
  const contract = myForge();
  console.log('myYFD Contract: ', contract);
  const response = await queryMsg(contract, queryBalance(myAddress()));
  console.log('{RESPONSE} YFD Balance: ', response);
  /* const balanceYFD = parseInt(
    convertFromBase(balanceYFDLoadable.tokenBalance).toFixed(5),
    10
  );*/
  console.log('YFD Balance: ', response);
};

export const myFYFD = async () => {
  return 100000;
};

export default myChain;
