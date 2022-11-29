const msgCreateProposalVaultMigrate = (
  vaultProposalIndex: string,
  newCodeId: string,
  isEmergency: boolean,
  justification: string
) => {
  return { 
    create_proposal: {
      proposal_type: {
        vault_migrate: {
          vault_index: vaultProposalIndex,
          new_code_id: newCodeId,
        },
      },
      emergency: isEmergency,
      justification_link: justification
    } 
  };
};

export default msgCreateProposalVaultMigrate;
