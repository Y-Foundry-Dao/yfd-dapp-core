import { useWallet } from '@terra-money/wallet-provider';
import { useEffect, useState } from 'react';

const useWalletAddress = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const { status, wallets } = useWallet();

  useEffect(() => {
    if (status == 'WALLET_CONNECTED') {
      setWalletAddress(wallets[0]?.terraAddress);
    }
  }, [status, walletAddress, wallets]);

  return { walletAddress, setWalletAddress };
};

export default useWalletAddress;
