import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import useMsg from './useMsg';
import queryTokens from 'utilities/messagesQuery/nft/queryTokens';
import { addressConnectedAtom } from '@recoil/connected/address/atoms';

const useContractNFT = ({ contract }: any) => {
  const { queryMsg } = useMsg();
  const [tokenIds, setTokenIds] = useState<any>([]);
  const connectedWallet = useRecoilValue(addressConnectedAtom);

  const getTokens = async () => {
    if (!connectedWallet) {
      return;
    }
    const response = await queryMsg(contract, queryTokens(connectedWallet));
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
