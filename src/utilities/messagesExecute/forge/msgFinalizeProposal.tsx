const msgFinalizeProposal = (
  proposalIndex: string,
) => {
  return {
    finalize_proposal: {
      idx: proposalIndex
    }
  };
};

export default msgFinalizeProposal;
