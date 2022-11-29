const msgCreateProposalMessage = (
  contract: string,
  encodedMessage: string,
  isEmergency: boolean,
  justification: string
) => {
  return { 
    create_proposal: {
      proposal_type: {
        message: {
          contract_addr: contract,
          message: encodedMessage,
        }
      },
      emergency: isEmergency,
      justification_link: justification
    } 
  };
};

export default msgCreateProposalMessage;
