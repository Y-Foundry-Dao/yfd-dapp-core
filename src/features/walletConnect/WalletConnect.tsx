import { useWallet, WalletStatus } from '@terra-money/use-wallet';
import {
  Button,
  Menu,
  MenuGroup,
  MenuOptionGroup,
  MenuItemOption,
  MenuButton,
  MenuList,
  MenuDivider,
  Link
} from '@chakra-ui/react';
import styles from '@scss/app.module.scss';
import NoticeLoading from '@components/NoticeLoading';
import MenuNotConnected from './menu/NotConnected';
import MenuInitializing from './menu/Initializing';
import MenuConnected from './menu/Connected';

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

  return (
    <Menu placement="bottom-end">
      {status === WalletStatus.INITIALIZING && <MenuInitializing />}
      {status === WalletStatus.WALLET_NOT_CONNECTED && <MenuNotConnected />}
      {status === WalletStatus.WALLET_CONNECTED && <MenuConnected />}
    </Menu>
  );
}
