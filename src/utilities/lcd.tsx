import { LCDClient } from '@terra-money/terra.js';

export const terra = new LCDClient({
  URL: 'https://pisco-lcd.terra.dev',
  chainID: 'pisco-1'
});
