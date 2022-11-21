import useMsg from './useMsg';
import { useEffect, useState } from 'react';
import queryTokens from 'utilities/messagesQuery/nft/queryTokens';
import { useConnectedWallet } from '@terra-money/wallet-provider';

const useContractNFT = ({ contract }: any) => {
  const { queryMsg } = useMsg();
  const [tokenIds, setTokenIds] = useState<any>([]);
  const connectedWallet = useConnectedWallet();

  const getTokens = async () => {
    if (!connectedWallet) {
      return;
    }
    const response = await queryMsg(
      contract,
      queryTokens(connectedWallet?.walletAddress)
    );
    console.log(response);
    return response;
  };

  const setTokensToState = async () => {
    const tokens: any = await getTokens();
    console.log(tokens);
    if (tokens === undefined) {
      setTokenIds([]);
      return;
    }
    setTokenIds(tokens.tokens);
  };

  useEffect(() => {
    setTokensToState;
  }, [connectedWallet, contract]);

  return {
    tokenIds
  };
};

export default useContractNFT;
