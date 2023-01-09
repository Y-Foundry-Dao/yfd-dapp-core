import useChainInfo from '@hooks/useChainInfo';
import useContractForge from '@hooks/useContractForge';
import { chainDeploy } from './variables/blockchain';

const getChainDeploy = (
  chain: string,
  field: 'lcd' | 'name' | 'forge' | 'token'
) => {
  const chainConfig = chainDeploy.find((item) => item.chainID === chain);
  if (chainConfig && chainConfig.config && chainConfig.config[0]) {
    const result: string = chainConfig.config[0][field];
    return result || '';
  }
  return '';
};

export default getChainDeploy;
