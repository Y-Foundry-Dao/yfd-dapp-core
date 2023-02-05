import { useEffect } from 'react';
import { useWallet, WalletStatus } from '@terra-money/use-wallet';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { Menu } from '@chakra-ui/react';
import {
  addressStatusAtom,
  addressConnectedAtom
} from '@recoil/connected/address/atoms';

import ObjectConnectWallet from '@components/ConnectWallet/Object';
import MenuInitializing from './menu/Initializing';
import MenuConnected from './menu/Connected';
import { currentChainIDAtom } from '@recoil/chainInfo/atoms';

// set the wallet status to recoil and check the extention/address status to determine which menu to show
export default function WalletConnect() {
  const { status, network, wallets } = useWallet();
  const setAddressStatus = useSetRecoilState(addressStatusAtom);
  const setAddressConnected = useSetRecoilState(addressConnectedAtom);
  const currentChainID = useRecoilValue(currentChainIDAtom);
  const currentAddress = useRecoilValue(addressConnectedAtom);

  useEffect(() => {
    setAddressStatus(status);
    if (status !== WalletStatus.WALLET_CONNECTED && wallets.length == 0) {
      return;
    }
    setAddressConnected(wallets[0].addresses[currentChainID]);
    console.log('current Address: ', currentAddress);
  }, [network, setAddressStatus, wallets, status, setAddressConnected]);

  return (
    <>
      <Menu placement="bottom-end">
        {status === WalletStatus.INITIALIZING && <MenuInitializing />}
        {status === WalletStatus.WALLET_NOT_CONNECTED && (
          <ObjectConnectWallet />
        )}
        {status === WalletStatus.WALLET_CONNECTED && <MenuConnected />}
      </Menu>
    </>
  );
}
