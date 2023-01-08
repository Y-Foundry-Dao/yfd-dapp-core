import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { useConnectedWallet } from '@terra-money/wallet-provider';
import { addressConnectedAtom } from '@recoil/connected/address/atoms';

export default function useAddressConnected(): string {
  const setAddressConnected = useSetRecoilState(addressConnectedAtom);
  const connectedWallet = useConnectedWallet();

  useEffect(() => {
    if (connectedWallet !== undefined) {
      setAddressConnected(connectedWallet?.walletAddress);
    }
  }, [connectedWallet, setAddressConnected]);
  return connectedWallet?.walletAddress as string;
}
