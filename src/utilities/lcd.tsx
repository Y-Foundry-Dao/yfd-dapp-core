import { LCDClient } from '@terra-money/terra.js';

const settenProject = 'a322f9bb68354790b8385d6b21df7a01';
const settenKey = 'b1dbc97838ac4ec1b95fasdf5ccc61458210';

// connect to pisco testnet
export const terra = new LCDClient({
  //  URL: `https://lcd.pisco.terra.setten.io/${settenProject}?key=${settenKey}`,
  URL: `https://pisco-lcd.terra.dev`,
  chainID: 'pisco-1'
});
