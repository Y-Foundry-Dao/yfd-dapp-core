import { useConnectedWallet } from '@terra-money/wallet-provider';
//import ConnectedWalletMenu from './connectedWallet/ConnectedWalletMenu';
import ConnectWalletMenu from './connectWallet/ConnectWalletMenu';
import Profile from '@features/profile/menu';
import useChainInfo from '@hooks/useChainInfo';

function WalletConnect() {
  const connectedWallet = useConnectedWallet();
  const chainID = useChainInfo().currentChainID; /// chain ID needs to be preloaded or assumed.
  console.log('WalletConnect - chainID: ', chainID);
  const blockHeight = useChainInfo().currentBlockHeight;
  const contractForge = useChainInfo().currentContractForge;
  if (connectedWallet) {
    // lets load up the default set of useful Global State data for the app
    // grab the ChainID
    // Probably all of this should be put into a useEffect() hook that refreshes the data when the chainID changes
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
