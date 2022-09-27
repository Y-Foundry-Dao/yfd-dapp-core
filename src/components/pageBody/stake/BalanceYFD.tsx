import { useConnectedWallet } from '@terra-money/wallet-provider';
import useContract from 'hooks/useContract';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import amountDepositYFDAtom from 'recoil/amountDepositYFD/atom';
import queryBalance from 'utilities/messagesQuery/balance';
import { YFD_TEST } from 'utilities/variables';

function BalanceYFD() {
  const { queryMsg } = useContract();
  const [balance, setBalance] = useState('0');
  const amountDepositYFD = useRecoilValue(amountDepositYFDAtom);
  const connectedWallet = useConnectedWallet();
  const getBalance = async () => {
    const response = await queryMsg(
      YFD_TEST,
      queryBalance(connectedWallet?.walletAddress)
    );
    return response;
  };
  useEffect(() => {
    getBalance().then((res: any) => {
      console.log(res);
      if (res !== undefined) {
        setBalance(res.balance);
      } else {
        setBalance('0');
      }
    });
  }, [connectedWallet, amountDepositYFD]);
  return (
    <div>Balance YFD: {(Number(balance) * Math.pow(10, -6)).toFixed(5)}</div>
  );
}

export default BalanceYFD;
