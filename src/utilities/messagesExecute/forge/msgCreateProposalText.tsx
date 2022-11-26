const msgCreateProposalText = (
  text: string,
  isEmergency: boolean,
  justification: string
) => {
  return { 
    create_proposal: {
      proposal_type: {
        text: {
          text: text
        }
      },
      emergency: isEmergency,
      justification_link: justification
    } 
  };
};

export default msgCreateProposalText;
