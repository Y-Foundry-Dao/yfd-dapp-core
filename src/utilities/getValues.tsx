import { chainDeploy } from './variables/blockchain';
import { useRecoilValueLoadable } from 'recoil';

export const getChainDeploy = (
  chain: string,
  field: 'forge' | 'token' | 'interval'
) => {
  const chainConfig = chainDeploy.find((item) => item.chainID === chain);
  if (chainConfig && chainConfig.config && chainConfig.config[0]) {
    const result: string | number = chainConfig.config[0][field];
    //console.log('getChainDeploy: ', field, 'is: ', result);
    return result || '';
  }
  return '';
};

export default getChainDeploy;
