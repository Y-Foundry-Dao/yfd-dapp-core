import { useConnectedWallet } from '@terra-money/wallet-provider';
import useMsg from 'hooks/useMsg';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import amountDepositYFDAtom from 'recoil/amountDepositYFD/atom';
import convertFromBase from 'utilities/converters/convertFromBase';
import queryBalance from 'utilities/messagesQuery/balance';
import { FORGE_TEST } from 'utilities/variables';

function BalancefYFD() {
  const { queryMsg } = useMsg();
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
  return <div>Balance fYFD: {convertFromBase(Number(balance)).toFixed(5)}</div>;
}

export default BalancefYFD;
