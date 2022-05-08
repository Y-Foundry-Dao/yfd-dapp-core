const msgPositionDeposit = (asset: any, assetPair: any, position: string) => {
  return {
    deposit: {
      loops: '4',
      asset: asset,
      asset_pair: assetPair,
      collateral_ratio: '2.5',
      position_idx: position
    }
  };
};

export default msgPositionDeposit;
