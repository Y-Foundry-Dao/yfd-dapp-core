import { MBTC_UST, MBTC } from 'utilities/variables';

const msgPositionDeposit = (position: string) => {
  return {
    deposit: {
      loops: '4',
      asset: MBTC,
      asset_pair: MBTC_UST,
      collateral_ratio: '2.5',
      position_idx: position
    }
  };
};

export default msgPositionDeposit;
