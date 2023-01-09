import { useWallet } from '@terra-money/wallet-provider';
import { useEffect } from 'react';
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
import { useRecoilValue } from 'recoil';
import { addressConnectedAtom } from '@recoil/connected/address/atoms';

function ConnectedWalletMenu() {
  const walletAddress = useRecoilValue(addressConnectedAtom);
  const { disconnect } = useWallet();
  const { hasCopied, onCopy } = useClipboard(walletAddress);
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
