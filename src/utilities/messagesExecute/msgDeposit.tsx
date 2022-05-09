const msgDeposit = (asset: any, pair: any, loops: any) => {
  return {
    deposit: {
      loops: loops,
      asset: asset,
      asset_pair: pair,
      collateral_ratio: '2.5'
    }
  };
};

export default msgDeposit;
