import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { useConnectedWallet } from '@terra-money/wallet-provider';
import { walletAddress } from '@recoil/wallet/atoms';

export default function useAddressConnected(): string {
  const setWalletAddress = useSetRecoilState(walletAddress);
  const connectedWallet = useConnectedWallet();

  useEffect(() => {
    if (connectedWallet !== undefined) {
      setWalletAddress(connectedWallet?.walletAddress);
    }
  }, [connectedWallet, setWalletAddress]);
  return connectedWallet?.walletAddress as string;
}
