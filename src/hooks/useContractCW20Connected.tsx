import { useRecoilValue } from 'recoil';
import { addressConnectedAtom } from '@recoil/connected/address/atoms';
import useContractCW20 from './useContractCW20';

const useContractCW20Connected = (contract: string) => {
  const address = useRecoilValue(addressConnectedAtom);
  const { tokenBalance, tokenInfo, marketingInfo, allAccounts } =
    useContractCW20(contract, address);

  return {
    tokenBalance,
    tokenInfo,
    marketingInfo,
    allAccounts
  };
};

export default useContractCW20Connected;
