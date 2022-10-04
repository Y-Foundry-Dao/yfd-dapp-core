import { useConnectedWallet } from '@terra-money/wallet-provider';
import useContract from 'hooks/useContract';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import amountDepositYFDAtom from 'recoil/amountDepositYFD/atom';
import queryBalance from 'utilities/messagesQuery/balance';
import { FORGE_TEST } from 'utilities/variables';

function BalancefYFD() {
  const { queryMsg } = useContract();
  const [balance, setBalance] = useState('0');
  const connectedWallet = useConnectedWallet();
  const amountDepositYFD = useRecoilValue(amountDepositYFDAtom);
  const getBalance = async () => {
    if (!connectedWallet) {
      return;
    }
    const response = await queryMsg(
      FORGE_TEST,
      queryBalance(connectedWallet?.walletAddress)
    );
    return response;
  };
  useEffect(() => {
    getBalance().then((res: any) => {
      if (res !== undefined) {
        setBalance(res.balance);
      } else {
        setBalance('0');
      }
    });
  }, [connectedWallet, amountDepositYFD]);
  return (
    <div>Balance fYFD: {(Number(balance) * Math.pow(10, -6)).toFixed(5)}</div>
  );
}

export default BalancefYFD;
