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

export default function MenuConnected() {
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
    <>
      <MenuButton minW={120} as={Button}>
        Connected
      </MenuButton>
      <MenuList className={styles['menu-wrapper']}>
        <MenuGroup title="Options">
          <Button onClick={() => disconnect()}>Disconnect</Button>
        </MenuGroup>
      </MenuList>
    </>
  );
}
