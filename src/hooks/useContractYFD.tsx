import { YFD_TEST } from 'Variables';
import useContractCW20Connected from '@hooks/useContractCW20Connected';

const useContractYFD = () => {
  const { tokenBalance, tokenInfo, marketingInfo, allAccounts } =
    useContractCW20Connected(YFD_TEST);

  return {
    tokenBalance,
    tokenInfo,
    marketingInfo,
    allAccounts
  };
};

export default useContractYFD;
