import { MBTC_UST, MBTC } from 'utilities/variables';

const msgDeposit = {
  deposit: {
    loops: '4',
    asset: MBTC,
    asset_pair: MBTC_UST,
    collateral_ratio: '2.5',
    position_idx: localStorage.getItem('position_idx')
  }
};

export default msgDeposit;
