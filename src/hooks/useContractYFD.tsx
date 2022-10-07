import { useConnectedWallet } from '@terra-money/wallet-provider';
import useMsg from './useMsg';
import queryBalance from 'utilities/messagesQuery/balance';
import { useEffect, useState } from 'react';
import { YFD_TEST } from 'utilities/variables';

const useContractYFD = () => {
  const { queryMsg } = useMsg();
  const connectedWallet = useConnectedWallet();
  const [tokenBalance, setTokenBalance] = useState('0');

  const getBalance = async () => {
    if (!connectedWallet) {
      return;
    }
    console.log(YFD_TEST);
    const response = await queryMsg(
      YFD_TEST,
      queryBalance(connectedWallet?.walletAddress)
    );
    return response;
  };

  const setTokenBalanceToState = async () => {
    const tokenBalance: any = await getBalance();
    console.log(tokenBalance);
    if (tokenBalance === undefined) {
      setTokenBalance('0');
      return;
    }
    console.log(tokenBalance.balance);
    setTokenBalance(tokenBalance.balance);
  };

  useEffect(() => {
    setTokenBalanceToState();
  }, [connectedWallet, YFD_TEST]);

  return {
    getBalance,
    tokenBalance
  };
};

export default useContractYFD;
