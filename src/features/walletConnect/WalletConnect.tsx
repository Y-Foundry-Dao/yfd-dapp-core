import { useConnectedWallet } from '@terra-money/wallet-provider';
//import ConnectedWalletMenu from './connectedWallet/ConnectedWalletMenu';
import ConnectWalletMenu from './connectWallet/ConnectWalletMenu';
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
  // grab connected network and wallet data
  const connectedWallet = useConnectedWallet();
  const walletAddress: string = connectedWallet?.walletAddress as string;

  // set the wallet data to Recoil State
  const [addressConnected, setAddressConnected] =
    useRecoilState(addressConnectedAtom);
  setAddressConnected(walletAddress);

  if (connectedWallet === undefined) {
    console.log('connectedWallet is undefined - show CONNECT WALLET button');
  }

  // set chain state
  const chainID = connectedWallet?.network.chainID || 'pisco-1'; /// chain ID needs to be preloaded or assumed.
  const [currentChainID, setCurrentChainID] =
    useRecoilState(currentChainIDAtom);
  setCurrentChainID(chainID);

  // set block height state
  const blockHeight = useChainInfo().currentBlockHeight;

  // set the values for the forge and gov token contracts
  const chainConfig = chainDeploy.find((item) => item.chainID === chainID);
  if (chainConfig && chainConfig.config && chainConfig.config[0]) {
    const chainInfo = chainConfig.config[0];
    const contractForge = chainInfo['forge'];
    const contractYFD = chainInfo['token'];
    const [currentContractForge, setCurrentContractForge] = useRecoilState(
      currentContractForgeAtom
    );
    const [currentContractGovToken, setCurrentContractGovToken] =
      useRecoilState(currentContractGovTokenAtom);
    setCurrentContractForge(chainInfo['forge']);
    setCurrentContractGovToken(chainInfo['token']);
  }
  //    const value = useContractForge('paramfYFDVaultPropMinimum');

  //const addressConnected = useRecoilValue(addressConnectedAtom);
  // if a wallet is connected - check to see if the wallet address is loaded into Recoi

  // use this just for RETURN don't do math in here, it won't render in order
  if (connectedWallet) {
    return <Profile />;
  } else {
    return (
      <>
        <ConnectWalletMenu />
      </>
    );
  }
}

export default WalletConnect;
