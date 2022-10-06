import { useConnectedWallet } from '@terra-money/wallet-provider';
import useMsg from 'hooks/useMsg';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import amountDepositYFDAtom from 'recoil/amountDepositYFD/atom';
import convertFromBase from 'utilities/converters/convertFromBase';
import queryBalance from 'utilities/messagesQuery/balance';
import { YFD_TEST } from 'utilities/variables';

function BalanceYFD() {
  const { queryMsg } = useMsg();
  const [balance, setBalance] = useState('0');
  const amountDepositYFD = useRecoilValue(amountDepositYFDAtom);
  const connectedWallet = useConnectedWallet();
  const getBalance = async () => {
    if (!connectedWallet) {
      return;
    }
    const response = await queryMsg(
      YFD_TEST,
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
  return <div>Balance YFD: {convertFromBase(Number(balance)).toFixed(5)}</div>;
}

export default BalanceYFD;
