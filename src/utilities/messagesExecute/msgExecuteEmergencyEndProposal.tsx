const msgExecuteEmergencyEndProposal = (
  proposalIdx: number,
  expirationEmergency: number,
  justification: string
) => {
  return {
    emergency_end_proposal: {
      proposal_idx: `${String(proposalIdx)}`,
      expiration: Number(expirationEmergency),
      justification_of_emergency: `${justification}`
    }
  };
};

export default msgExecuteEmergencyEndProposal;
