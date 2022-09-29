import { useConnectedWallet, useWallet } from '@terra-money/wallet-provider';
import { useEffect, useState } from 'react';
import { Web3Address } from '@saas-ui/web3';
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuGroup,
  useClipboard
} from '@chakra-ui/react';
function ConnectedWalletMenu() {
  const [walletAddress, setWalletAddress] = useState('');
  const { disconnect } = useWallet();
  const connectedWallet = useConnectedWallet();
  const { hasCopied, onCopy } = useClipboard(walletAddress);
  useEffect(() => {
    if (connectedWallet !== undefined) {
      setWalletAddress(connectedWallet?.walletAddress);
    }
  }, [connectedWallet]);
  return (
    <Menu>
      <MenuButton minWidth={120} as={Button} colorScheme="blue">
        {hasCopied ? (
          'Copied!'
        ) : (
          <Web3Address address={walletAddress} startLength={7} />
        )}
      </MenuButton>
      <MenuList>
        <MenuGroup title="Wallet Connected">
          <MenuItem onClick={onCopy} closeOnSelect={false}>
            <Web3Address
              address={walletAddress}
              startLength={10}
              endLength={6}
            />
          </MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup>
          <MenuItem
            as={Button}
            onClick={() => {
              disconnect();
            }}
          >
            Disconnect
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
}

export default ConnectedWalletMenu;
