const queryVaultProposalByIndex = (index: any) => {
  return {
    vault_proposal: {
      idx: `${index}`
    }
  };
};

export default queryVaultProposalByIndex;
