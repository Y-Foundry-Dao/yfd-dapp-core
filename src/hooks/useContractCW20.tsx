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

const useContractCW20 = (contract: string) => {
  const { queryMsg } = useMsg();
  const connectedWallet = useConnectedWallet();

  const [tokenBalance, setTokenBalance] = useState('0');
  const [tokenInfo, setTokenInfo] = useState({});
  const [marketingInfo, setMarketingInfo] = useState({});
  const [allAccounts, setAllAccounts] = useState([]);

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
    const response = await queryMsg(contract, queryTokenInfo());
    return response;
  };

  // TODO: Figure out
  const getLogo = async () => {
    const response = await queryMsg(contract, queryDownloadLogo());
    return response;
  };

  const getMarketingInfo = async () => {
    const response = await queryMsg(contract, queryMarketingInfo());
    return response;
  };

  const getAllAccounts = async () => {
    const response = await queryMsg(contract, queryAllAccounts());
    return response;
  };
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

  const setTokenInfoToState = async () => {
    const tokenInfo: any = await getTokenInfo();
    setTokenInfo(tokenInfo);
  };

  const setMarketingInfoToState = async () => {
    const marketingInfo: any = await getMarketingInfo();
    setMarketingInfo(marketingInfo);
  };

  const setAllAccountsToState = async () => {
    const allAccounts: any = await getAllAccounts();
    setAllAccounts(allAccounts);
  };

  useEffect(() => {
    setTokenBalanceToState();
  }, [connectedWallet, contract, txHashInRecoil]);

  useEffect(() => {
    setTokenInfoToState();
    setMarketingInfoToState();
    setAllAccountsToState();
  }, [contract]);

  return {
    tokenBalance,
    tokenInfo,
    marketingInfo,
    allAccounts
  };
};

export default useContractCW20;
