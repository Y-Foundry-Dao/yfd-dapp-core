const msgCreateProposalStopVaultProposal = (
  vaultProposalIndex: string,
  isEmergency: boolean,
  justification: string
) => {
  return { 
    create_proposal: {
      proposal_type: {
        vault_proposal_stop: {
          vault_proposal_idx: vaultProposalIndex
        }
      },
      emergency: isEmergency,
      justification_link: justification
    } 
  };
};

export default msgCreateProposalStopVaultProposal;
