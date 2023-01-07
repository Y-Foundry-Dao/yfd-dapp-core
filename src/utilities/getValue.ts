import { chainConnect } from './variables/blockchain';

const getChainLcd = (chain: string) => {
  const chainConfig = chainConnect.find((item) => item.chainID === chain);
  if (chainConfig) {
    return chainConfig.config[0].lcd;
  }
  return '';
};

export default getChainLcd;
