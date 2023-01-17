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

export default function MenuInitializing() {
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
        <NoticeLoading title="Initializing" />
      </MenuButton>
      <MenuList className={styles['menu-wrapper']}>
        <MenuGroup title="Options">
          <Button key={'siteMenuReload'} onClick={() => location.reload()}>
            {<div>Reload dApp</div>}
          </Button>
        </MenuGroup>
      </MenuList>
    </>
  );
}
