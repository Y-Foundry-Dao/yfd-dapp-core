import useMsg from './useMsg';
import queryBalance from 'utilities/messagesQuery/cw20/queryBalance';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import txHashAtom from 'recoil/txHash/atom';
import queryTokenInfo from 'utilities/messagesQuery/cw20/queryTokenInfo';
import queryDownloadLogo from 'utilities/messagesQuery/cw20/queryDownloadLogo';
import queryMarketingInfo from 'utilities/messagesQuery/cw20/queryMarketingInfo';
import queryAllAccounts from 'utilities/messagesQuery/cw20/queryAllAccounts';

const useContractCW20 = (contract: string, address: string) => {
  const { queryMsg } = useMsg();

  const [tokenBalance, setTokenBalance] = useState(0);
  const [tokenInfo, setTokenInfo] = useState({});
  const [marketingInfo, setMarketingInfo] = useState({});
  const [allAccounts, setAllAccounts] = useState([]);

  const txHashInRecoil = useRecoilValue(txHashAtom);

  const getBalance = async (address: string) => {
    const response = await queryMsg(contract, queryBalance(address));
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
    console.log(
      'this is where the token balances can be updated from the chain'
    );
  }, [contract, txHashInRecoil]);

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
