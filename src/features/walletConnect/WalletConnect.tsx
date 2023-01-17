import { useEffect } from 'react';
import { useWallet, WalletStatus } from '@terra-money/use-wallet';
import { useSetRecoilState } from 'recoil';
import { Menu } from '@chakra-ui/react';
import { addressStatusAtom } from '@recoil/connected/address/atoms';

import styles from '@scss/app.module.scss';
import NoticeLoading from '@components/NoticeLoading';
import MenuNotConnected from './menu/NotConnected';
import MenuInitializing from './menu/Initializing';
import MenuConnected from './menu/Connected';

// set the wallet status to recoil and check the extention/address status to determine which menu to show
export default function WalletConnect() {
  const {
    status,
    network,
    wallets,
    availableConnectTypes,
    availableInstallTypes,
    availableConnections,
    supportFeatures,
    connect,
    availableInstallations,
    disconnect
  } = useWallet();

  const setAddressStatus = useSetRecoilState(addressStatusAtom);

  useEffect(() => {
    setAddressStatus(status);
    console.warn('WALLET STATUS CHANGED: ', status);
    if (status !== WalletStatus.WALLET_CONNECTED && wallets.length == 0) {
      return;
    }
    console.log('WALLET IS CONNECTED: ', wallets[0].terraAddress);
    console.log('NETWORK IS: ', network.name + ' CHAINID: ' + network.chainID);
    console.log('NETWORK: ', network);
  }, [addressStatusAtom, status]);

  return (
    <Menu placement="bottom-end">
      {status === WalletStatus.INITIALIZING && <MenuInitializing />}
      {status === WalletStatus.WALLET_NOT_CONNECTED && <MenuNotConnected />}
      {status === WalletStatus.WALLET_CONNECTED && <MenuConnected />}
    </Menu>
  );
}
