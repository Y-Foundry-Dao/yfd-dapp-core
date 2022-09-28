import { useConnectedWallet } from '@terra-money/wallet-provider';
import ConnectedWalletMenu from './connectedWallet/ConnectedWalletMenu';
import ConnectWalletMenu from './connectWallet/ConnectWalletMenu';

function WalletConnect() {
  const connectedWallet = useConnectedWallet();
  return (
    <>{connectedWallet ? <ConnectedWalletMenu /> : <ConnectWalletMenu />}</>
  );
}

export default WalletConnect;
