const msgCreateProposalParameter = (
  parameter: string,
  value: number,
  isEmergency: boolean,
  justification: string
) => {
  return {
    create_proposal: {
      proposal_type: {
        parameter: {
          name: parameter,
          change: {
            change: {
              value: value
            }
          }
        }
      },
      emergency: isEmergency,
      justification_link: justification
    }
  };
};

export default msgCreateProposalParameter;
