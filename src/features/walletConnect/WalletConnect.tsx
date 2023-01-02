import { useConnectedWallet } from '@terra-money/wallet-provider';
//import ConnectedWalletMenu from './connectedWallet/ConnectedWalletMenu';
import ConnectWalletMenu from './connectWallet/ConnectWalletMenu';
import Profile from '@components/Profile';

function WalletConnect() {
  const connectedWallet = useConnectedWallet();
  return <>{connectedWallet ? <Profile /> : <ConnectWalletMenu />}</>;
}

export default WalletConnect;
