import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuDivider
} from '@chakra-ui/react';
import AvailableConnectionsList from './AvailableConnectionsList';
import AvailableInstallationsList from './AvailableInstallationsList';

function ConnectWalletMenu() {
  return (
    <Menu>
      <MenuButton minW={120} as={Button} colorScheme="blue">
        Connect Wallet
      </MenuButton>
      <MenuList>
        <AvailableConnectionsList />
        <MenuDivider />
        <AvailableInstallationsList />
      </MenuList>
    </Menu>
  );
}

export default ConnectWalletMenu;
