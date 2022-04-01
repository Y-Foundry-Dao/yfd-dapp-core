import { MBTC_UST, MBTC } from './variables';

const msgQuery = {
  deposit: {
    loops: '3',
    asset: MBTC,
    asset_pair: MBTC_UST,
    collateral_ratio: '2.5'
  }
};

export default msgQuery;
