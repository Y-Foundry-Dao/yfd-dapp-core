const queryVaultFundingMath = (developmentCost: any, nftAmount: any) => {
  return {
    vault_funding_math: {
      target_funding: String(developmentCost),
      nft_quantity: Number(nftAmount)
    }
  };
};

export default queryVaultFundingMath;
