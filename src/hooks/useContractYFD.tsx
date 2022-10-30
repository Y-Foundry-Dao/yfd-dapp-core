import { useConnectedWallet } from '@terra-money/wallet-provider';
import useMsg from './useMsg';
import queryBalance from 'utilities/messagesQuery/queryBalance';
import { useEffect, useState } from 'react';
import { YFD_TEST } from 'utilities/variables/variables';
import { useRecoilValue } from 'recoil';
import txHashAtom from 'recoil/txHash/atom';

const useContractYFD = () => {
  const { queryMsg } = useMsg();
  const connectedWallet = useConnectedWallet();
  const [tokenBalance, setTokenBalance] = useState('0');
  const txHashInRecoil = useRecoilValue(txHashAtom);

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

  const setTokenBalanceToState = async () => {
    const tokenBalance: any = await getBalance();
    if (tokenBalance === undefined) {
      setTokenBalance('0');
      return;
    }
    setTokenBalance(tokenBalance.balance);
  };

  useEffect(() => {
    setTokenBalanceToState();
  }, [connectedWallet, YFD_TEST, txHashInRecoil]);

  return {
    tokenBalance
  };
};

export default useContractYFD;
