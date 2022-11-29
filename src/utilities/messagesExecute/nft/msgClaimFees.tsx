const msgClaimFees = (claimContractAddress: string) => {
  return {
    extension: {
      msg: {
        claim_fees: {
          claim_contract_addr: claimContractAddress
        }
      }
    }
  };
};

export default msgClaimFees;
