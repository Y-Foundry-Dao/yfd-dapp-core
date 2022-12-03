import { LCDClient } from '@terra-money/terra.js';
import { URL_LCD, CHAIN_ID } from 'utilities/variables/blockchain';

export const terra = new LCDClient({
  //  URL: `https://lcd.pisco.terra.setten.io/${settenProject}?key=${settenKey}`,
  URL: URL_LCD,
  chainID: CHAIN_ID
});
