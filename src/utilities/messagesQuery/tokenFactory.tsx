const queryAssetPrice = (contract: string) => {
  return {
    pair: {
      asset_infos: [
        {
          token: {
            contract_addr: contract
          }
        },
        {
          native_token: {
            denom: 'uusd'
          }
        }
      ]
    }
  };
};

export default queryAssetPrice;
