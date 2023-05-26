import { LCDClient } from '@terra-money/feather.js';

export const MyLCD = () => {
  return new LCDClient({
    'pisco-1': {
      //      lcd: 'https://pisco-lcd.terra.dev',
      lcd: 'https://pisco-lcd.erisprotocol.com',
      chainID: 'pisco-1',
      gasAdjustment: 1.75,
      gasPrices: { uluna: 0.015 },
      prefix: 'terra' // bech32 prefix, used by the LCD to understand which is the right chain to query
    },
    'uni-6': {
      lcd: 'https://lcd.uni.juno.deuslabs.fi',
      chainID: 'uni-6',
      gasAdjustment: 1.75,
      gasPrices: { uluna: 0.025 },
      prefix: 'juno'
    },
    'osmosis-1': {
      chainID: 'osmosis-1',
      lcd: 'https://lcd.osmosis.zone',
      gasAdjustment: 1.75,
      gasPrices: {
        uosmo: 0.025
      },
      prefix: 'osmo'
    }
  });
};

export default MyLCD;
