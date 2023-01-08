import { useConnectedWallet } from '@terra-money/wallet-provider';
//import ConnectedWalletMenu from './connectedWallet/ConnectedWalletMenu';
import ConnectWalletMenu from './connectWallet/ConnectWalletMenu';
import Profile from '@features/profile/menu';
import useChainInfo from '@hooks/useChainInfo';
import { useSetRecoilState, SetRecoilState, useRecoilState } from 'recoil';
import { addressConnectedAtom } from '@recoil/connected/address/atoms';
import {
  currentBalanceYfdAtom,
  currentBalanceFyfdAtom
} from '@recoil/connected/balance/atoms';
import { myYFD, myFYFD } from '@utilities/myValues';

function WalletConnect() {
  // lets load up the default set of useful Global State data for the app
  // grab the ChainID
  // Probably all of this should be put into a useEffect() hook that refreshes the data when the chainID changes
  const connectedWallet = useConnectedWallet();
  const chainID = useChainInfo().currentChainID || 'pisco-1'; /// chain ID needs to be preloaded or assumed.
  const blockHeight = useChainInfo().currentBlockHeight;
  const [currentBalanceYfd, setCurrentBalanceYfd] = useRecoilState(
    currentBalanceYfdAtom
  );
  const [currentBalanceFyfd, setCurrentBalanceFyfd] = useRecoilState(
    currentBalanceFyfdAtom
  );
  const [connectedAddress, setConnectedAddress] =
    useRecoilState(addressConnectedAtom);

  if (connectedWallet) {
    const walletAddress: string = connectedWallet?.walletAddress;
    setConnectedAddress(walletAddress); // sync recoil wallet value with the connected wallet
    const YFD = myYFD();
    const FYFD = myFYFD();
    console.log('WalletConnect: connectedWallet: ', connectedAddress);
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
