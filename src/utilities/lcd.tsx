import { LCDClient } from '@terra-money/terra.js';
import { chainConnect } from '@var/blockchain';

const ChainID = 'pisco-1';

const data = chainConnect.find((data) => data.chainID === ChainID);
const value: any =
  chainConnect
    .find((data) => data.chainID === ChainID)
    ?.config.map((config) => config.lcd) || [];
console.log('chainConnect->data: ', data);
console.log('value: ', value);
export const terra = new LCDClient({
  URL: value[0],
  chainID: 'pisco-1'
});
