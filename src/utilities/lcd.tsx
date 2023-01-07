import { LCDClient } from '@terra-money/terra.js';
import getChainLcd from '@utilities/getValue';

const ChainID = 'pisco-1';

export const terra = new LCDClient({
  URL: getChainLcd(ChainID),
  chainID: ChainID
});
