import { useConnectedWallet, useWallet } from '@terra-money/wallet-provider';
//import ConnectedWalletMenu from './connectedWallet/ConnectedWalletMenu';
import ConnectWalletMenu from './connectWallet/ConnectWalletMenu';
import ChainUnsupportedMenu from './connectWallet/ChainUnsupportedMenu';
import { useRecoilState, useRecoilValue } from 'recoil';
import { addressConnectedAtom } from '@recoil/connected/address/atoms';
import {
  currentChainIDAtom,
  currentContractForgeAtom,
  currentContractGovTokenAtom
} from '@recoil/chainInfo/atoms';
import Profile from '@features/profile/menu';
import useChainInfo from '@hooks/useChainInfo';
import { chainDeploy } from '@var/blockchain';

function SetChainIdToState() {
  const [currentChainID, setCurrentChainID] =
    useRecoilState(currentChainIDAtom);
  const chainID = useWallet().network.chainID;
  console.log('{ setChainIdToState } chainID: ' + chainID);
  setCurrentChainID(chainID);
  return useWallet().network.chainID;
}

function SetContractForgeToState() {
  const [currentContractForge, setCurrentContractForge] = useRecoilState(
    currentContractForgeAtom
  );
  const chainID = useWallet().network.chainID;
  const chainConfig = chainDeploy.find((item) => item.chainID === chainID);
  if (
    typeof chainConfig === 'undefined' ||
    typeof chainConfig.config[0] === 'undefined'
  ) {
    return;
  }
  const chainInfo = chainConfig.config[0];
  const contractForge = chainInfo['forge'];
  setCurrentContractForge(contractForge);
  return contractForge;
}

function SetContractTokenToState() {
  const [currentContractGovToken, setCurrentContractGovToken] = useRecoilState(
    currentContractGovTokenAtom
  );
  const chainID = useWallet().network.chainID;
  const chainConfig = chainDeploy.find((item) => item.chainID === chainID);
  if (
    typeof chainConfig === 'undefined' ||
    typeof chainConfig.config[0] === 'undefined'
  ) {
    return;
  }
  console.log(
    '{function} TOKEN CONTRACT set to: ' + chainConfig.config[0].token
  );
  const chainInfo = chainConfig.config[0];
  const contractToken = chainInfo['token'];
  setCurrentContractGovToken(contractToken);
  return contractToken;
}

// the menu to return if the chain is not supported
function UnsupportedChain() {
  const chainID = useWallet().network.chainID;
  console.warn('CHAIN ' + chainID + 'NOT SUPPORTED');
  return (
    <>
      <ChainUnsupportedMenu />
    </>
  );
}

function SetAddressConnectedToState() {
  const [addressConnected, setAddressConnected] =
    useRecoilState(addressConnectedAtom);
  const connectedWallet = useConnectedWallet();
  const walletAddress: string = connectedWallet?.walletAddress as string;
  setAddressConnected(walletAddress);
  return walletAddress;
}

export default function WalletConnect() {
  const ChainInfo = useChainInfo();
  const chainID = SetChainIdToState();
  const connectedWallet = useConnectedWallet();
  const walletStatus = useWallet().status;
  console.log('{RECOIL} chainID: ' + chainID);
  console.log('{WALLET CONNECT} walletStatus: ' + walletStatus);

  const chainConfig = chainDeploy.find((item) => item.chainID === chainID);

  if (
    walletStatus === 'WALLET_NOT_CONNECTED' ||
    walletStatus === 'INITIALIZING'
  ) {
    console.log('walletStatus: ' + walletStatus);
    return (
      <>
        <ConnectWalletMenu />
      </>
    );
  }
  //  const contractForge = SetContractForgeToState();
  //  const contractToken = SetContractTokenToState();
  //  const walletAddress = SetAddressConnectedToState();

  // if the chainConfig is empty or doesn't match a supported chain - show the chain unsupported menu
  if (
    typeof chainConfig === 'undefined' ||
    typeof chainConfig.config[0] === 'undefined'
  ) {
    console.log(
      '{ CHAIN CONFIG MISSING } Chain: ' + chainID + ' chainConfig is undefined'
    );
    return UnsupportedChain();
  }

  const walletAddress: string = connectedWallet?.walletAddress as string;
  if (
    typeof chainConfig !== 'undefined' &&
    typeof chainConfig.config[0] !== 'undefined'
  ) {
    const contractForge = chainConfig.config[0].forge || undefined;
    const contractToken = chainConfig.config[0].token;
    console.log(' { WALLET CONNECT } contractForge: ' + contractForge);
    console.log(' { WALLET CONNECT } contractToken: ' + contractToken);
  }
  console.log('WALLET CONNECTED - show PROFILE button');
  return (
    <>
      <Profile />
    </>
  );
}
