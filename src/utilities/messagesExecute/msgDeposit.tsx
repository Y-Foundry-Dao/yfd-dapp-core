const msgDeposit = (asset: any, pair: any) => {
  return {
    deposit: {
      loops: '4',
      asset: asset,
      asset_pair: pair,
      collateral_ratio: '2.5'
    }
  };
};

export default msgDeposit;
