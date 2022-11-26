const queryPendingClaims = (claimContract: string, nftOwner: string) => {
  return {
    extension: {
      msg: {
        pending_claims: {
          claim_contract_addr: claimContract,
          owner_addr: nftOwner
        }
      }
    }
  }
};

export default queryPendingClaims;
