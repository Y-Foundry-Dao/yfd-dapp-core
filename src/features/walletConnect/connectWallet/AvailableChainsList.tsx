import { useConnectedWallet, useWallet } from '@terra-money/wallet-provider';
import { MenuItem, Image, Link, MenuGroup } from '@chakra-ui/react';
import { chainDeploy } from '@var/blockchain';

function AvailableChainsList() {
  const availableChains = [];
  chainDeploy.forEach((chain) => {
    chain.config.forEach((c) => {
      availableChains.push(
        <MenuItem>
          <p>
            {chain.chainID} - {c.name}
          </p>
        </MenuItem>
      );
    });
  });
  return (
    <MenuGroup
      title={
        availableChains.length !== 0
          ? 'Change to an Available Chain:'
          : 'No Available Chains'
      }
    >
      {chainDeploy.map((chain) => {
        return chain.config
          .map((c) => {
            return (
              <MenuItem>
                <p>
                  {c.name} ( {chain.chainID} )
                </p>
              </MenuItem>
            );
          })
          .flat();
      })}
    </MenuGroup>
  );
}

export default AvailableChainsList;
