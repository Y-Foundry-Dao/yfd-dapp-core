const msgPositionDeposit = (
  asset: any,
  assetPair: any,
  loops: any,
  position: string
) => {
  return {
    deposit: {
      loops: loops,
      asset: asset,
      asset_pair: assetPair,
      collateral_ratio: '2.5',
      position_idx: position
    }
  };
};

export default msgPositionDeposit;
