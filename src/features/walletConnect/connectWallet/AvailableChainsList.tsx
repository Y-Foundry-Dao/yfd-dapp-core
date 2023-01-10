import { useConnectedWallet, useWallet } from '@terra-money/wallet-provider';
import { MenuItem, Image, Link, MenuGroup } from '@chakra-ui/react';
import { chainDeploy } from '@var/blockchain';

function AvailableChainsList() {
  const connectedWallet = useConnectedWallet();
  const chainID = connectedWallet?.network.chainID;
  const availableChains = Object.keys(chainDeploy);
  return (
    <MenuGroup
      title={
        availableChains.length !== 0
          ? 'Ready to Connect'
          : 'No Available Chains'
      }
    >
      {availableChains.map((key) => (
        <MenuItem>{key}</MenuItem>
      ))}
    </MenuGroup>
  );
}

export default AvailableChainsList;
