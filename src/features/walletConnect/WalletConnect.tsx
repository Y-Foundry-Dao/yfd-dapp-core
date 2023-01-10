import { useConnectedWallet, useWallet } from '@terra-money/wallet-provider';
//import ConnectedWalletMenu from './connectedWallet/ConnectedWalletMenu';
import ConnectWalletMenu from './connectWallet/ConnectWalletMenu';
import ChainUnsupportedMenu from './connectWallet/ChainUnsupportedMenu';
import {
  useSetRecoilState,
  SetRecoilState,
  useRecoilState,
  useRecoilValue,
  useRecoilValueLoadable
} from 'recoil';
import {
  addressConnectedAtom,
  balanceYfdConnectedAtom,
  balanceFyfdConnectedAtom
} from '@recoil/connected/address/atoms';
import {
  currentChainIDAtom,
  currentContractForgeAtom,
  currentContractGovTokenAtom
} from '@recoil/chainInfo/atoms';

import Profile from '@features/profile/menu';
import useChainInfo from '@hooks/useChainInfo';
import { chainDeploy } from '@var/blockchain';
import { myYFD, myFYFD } from '@utilities/myValues';

function WalletConnect() {
  const [addressConnected, setAddressConnected] =
    useRecoilState(addressConnectedAtom);
  const [currentContractForge, setCurrentContractForge] = useRecoilState(
    currentContractForgeAtom
  );
  const [currentContractGovToken, setCurrentContractGovToken] = useRecoilState(
    currentContractGovTokenAtom
  );
  const [currentChainID, setCurrentChainID] =
    useRecoilState(currentChainIDAtom);

  //const chainID = setCurrentChainID(chainID);
  console.log('{ RECOIL } CHAIN ID: ', useRecoilValue(currentChainIDAtom));

  const wallet = useConnectedWallet();
  const walletAddress: string = wallet?.walletAddress as string;
  console.log('{ RECOIL } WALLET: ', wallet);

  // check to see if the chain is supported
  const chainConfig = chainDeploy.find(
    (item) => item.chainID === useWallet().network.chainID
  );
  if (chainConfig && chainConfig.config && chainConfig.config[0]) {
    console.log('{LOCAL} CHAIN CONFIG: ', chainConfig);
    console.log('CHAIN CONFIG: ', chainConfig);

    const chainInfo = chainConfig.config[0];
    const contractForge = chainInfo['forge'];
    const contractYFD = chainInfo['token'];
    setCurrentContractForge(chainInfo['forge']);
    setCurrentContractGovToken(chainInfo['token']);

    // grab wallet address
    const connectedWallet = useConnectedWallet();
    console.log('CONNECTED WALLET: ', connectedWallet);
    const walletAddress: string = connectedWallet?.walletAddress as string;
    setAddressConnected(walletAddress);

    // if the wallet isn't connected, show the connect wallet button
    if (typeof connectedWallet !== undefined) {
      console.log('WALLET CONNECTED - show PROFILE button');
      return (
        <>
          <Profile />
        </>
      );
    } else {
      console.log('connectedWallet is undefined - show CONNECT WALLET button');
      return (
        <>
          <ConnectWalletMenu />
        </>
      );
    }
  } else {
    console.log('CHAIN NOT SUPPORTED - show AVAILABLE CHAINS button');
    return (
      <>
        <ChainUnsupportedMenu />
      </>
    );
  }
}

export default WalletConnect;
