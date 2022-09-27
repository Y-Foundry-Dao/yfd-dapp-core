import { useConnectedWallet, useWallet } from '@terra-money/wallet-provider';
import React from 'react';
import { Button } from '@chakra-ui/react';
function ConnectedWalletMenu() {
  const { disconnect } = useWallet();
  return <Button onClick={() => disconnect()}>ConnectedWalletMenu</Button>;
}

export default ConnectedWalletMenu;
