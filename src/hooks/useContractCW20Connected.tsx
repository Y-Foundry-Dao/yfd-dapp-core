import useMsg from './useMsg';
import queryDownloadLogo from 'utilities/messagesQuery/cw20/queryDownloadLogo';
import useAddressConnected from '@hooks/useAddressConnected';
import useContractCW20 from './useContractCW20';

const useContractCW20Connected = (contract: string) => {
  const address = useAddressConnected();
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
