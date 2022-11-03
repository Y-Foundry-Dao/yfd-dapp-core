const queryVaultFundingMath = ({ developmentCost, nftQuantity }: any) => {
  return {
    vault_funding_math: {
      target_funding: `"${developmentCost}"`,
      nft_quantity: `${nftQuantity}`
    }
  };
};

export default queryVaultFundingMath;
