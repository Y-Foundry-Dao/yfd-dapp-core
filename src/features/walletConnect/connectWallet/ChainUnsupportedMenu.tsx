import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuDivider
} from '@chakra-ui/react';
import AvailableChainsList from './AvailableChainsList';

function ChainUnsupportedMenu() {
  return (
    <Menu>
      <MenuButton minW={120} as={Button}>
        Unsupported Chain
      </MenuButton>
      <MenuList>
        <AvailableChainsList />
        <MenuDivider />
      </MenuList>
    </Menu>
  );
}

export default ChainUnsupportedMenu;
