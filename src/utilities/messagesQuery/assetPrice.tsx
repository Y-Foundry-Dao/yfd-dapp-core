const queryAssetPrice = (asset_contract: any) => {
  return {
    price: {
      asset: asset_contract
    }
  };
};

export default queryAssetPrice;
