import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuGroup,
  Image,
  Link
} from '@chakra-ui/react';

import { useWallet } from '@terra-money/wallet-provider';

function ConnectWalletMenu() {
  const { availableConnections, connect, availableInstallations } = useWallet();

  return (
    <Menu>
      <MenuButton as={Button} colorScheme="blue">
        Connect Wallet
      </MenuButton>
      <MenuList>
        <MenuGroup title="Ready to Connect">
          {availableConnections.map(({ type, name, icon, identifier = '' }) => (
            <MenuItem
              icon={<Image height={5} src={icon} alt={name} />}
              onClick={() => {
                connect(type, identifier);
              }}
              key={'connection-' + type + identifier}
            >
              {name}
            </MenuItem>
          ))}
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title="Install">
          {availableInstallations.map(
            ({ type, name, icon, identifier = '', url }) => (
              <>
                {console.log(type, name, icon, identifier, url)}
                <MenuItem as={Link} key={`${type}:${identifier}`} href={url}>
                  <Image mr={4} height={5} src={icon} alt={name} />
                  {name}
                </MenuItem>
              </>
            )
          )}
        </MenuGroup>
      </MenuList>
    </Menu>
  );
}

export default ConnectWalletMenu;
