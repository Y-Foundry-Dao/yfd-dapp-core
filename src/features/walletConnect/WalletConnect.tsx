import { useConnectedWallet } from '@terra-money/wallet-provider';
//import ConnectedWalletMenu from './connectedWallet/ConnectedWalletMenu';
import ConnectWalletMenu from './connectWallet/ConnectWalletMenu';
import Profile from '@features/profile/menu';

function WalletConnect() {
  const connectedWallet = useConnectedWallet();
  return <>{connectedWallet ? <Profile /> : <ConnectWalletMenu />}</>;
}

export default WalletConnect;
