import { LCDClient } from '@terra-money/terra.js';

export const terra = new LCDClient({
  URL: 'https://bombay-lcd.terra.dev',
  chainID: 'bombay-12'
});
