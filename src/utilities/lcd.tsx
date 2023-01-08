import { LCDClient } from '@terra-money/terra.js';
import getChainDeploy from '@utilities/getValues';

const ChainID = 'pisco-1';

export const terra = new LCDClient({
  URL: getChainDeploy(ChainID, 'lcd'),
  chainID: ChainID
});
