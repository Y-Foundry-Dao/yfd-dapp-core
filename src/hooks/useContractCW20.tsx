import { useConnectedWallet } from '@terra-money/wallet-provider';
import useMsg from './useMsg';
import queryBalance from 'utilities/messagesQuery/cw20/queryBalance';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import txHashAtom from 'recoil/txHash/atom';
import queryTokenInfo from 'utilities/messagesQuery/cw20/queryTokenInfo';
import queryDownloadLogo from 'utilities/messagesQuery/cw20/queryDownloadLogo';
import queryMarketingInfo from 'utilities/messagesQuery/cw20/queryMarketingInfo';
import queryAllAccounts from 'utilities/messagesQuery/cw20/queryAllAccounts';

const useContractCW20 = ({contract}: any) => {
  const { queryMsg } = useMsg();
  const connectedWallet = useConnectedWallet();
  const [tokenBalance, setTokenBalance] = useState('0');
  const txHashInRecoil = useRecoilValue(txHashAtom);

  const getBalance = async () => {
    if (!connectedWallet) {
      return;
    }
    const response = await queryMsg(
      contract,
      queryBalance(connectedWallet?.walletAddress)
    );
    return response;
  };

  const getTokenInfo = async () => {
    const response = await queryMsg(contract, queryTokenInfo())
    return response
  }

  const getLogo = async () => {
    const response = await queryMsg(contract, queryDownloadLogo())
    return response
  }

  const getMarketingInfo = async () => {
    const response = await queryMsg(contract, queryMarketingInfo())
    return response
  }

  const getAllAccounts = async () => {
    const response = await queryMsg(contract, queryAllAccounts())
    return response
  }
  // TODO: Add queryAllAllowances and queryAllowance calls.
  // * Ultimately Allowances aren't used in v1 but just available through the CW20 token standard

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
  }, [connectedWallet, contract, txHashInRecoil]);

  return {
    tokenBalance
  };
};

export default useContractCW20;
