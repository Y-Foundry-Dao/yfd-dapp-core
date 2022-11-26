const msgCreateProposalLiquidateVault = (
  vaultAddress: string,
  isEmergency: boolean,
  justification: string
) => {
  return { 
    create_proposal: {
      proposal_type: {
        vault_liquidate: {
          vault_address: vaultAddress
        }
      },
      emergency: isEmergency,
      justification_link: justification
    } 
  };
};

export default msgCreateProposalLiquidateVault;
