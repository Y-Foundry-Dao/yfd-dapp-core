import { MBTC_UST, MBTC } from 'utilities/variables';

const msgDeposit = {
  deposit: {
    loops: '3',
    asset: MBTC,
    asset_pair: MBTC_UST,
    collateral_ratio: '2.5'
  }
};

export default msgDeposit;
