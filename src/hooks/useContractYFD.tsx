import { YFD_TEST } from '@utilities/variables';
import useContractCW20 from './useContractCW20';

const useContractYFD = () => {
  const { tokenBalance, tokenInfo, marketingInfo, allAccounts } =
    useContractCW20(YFD_TEST);

  return {
    tokenBalance,
    tokenInfo,
    marketingInfo,
    allAccounts
  };
};

export default useContractYFD;
