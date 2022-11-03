const queryProposalByIndex = (index: any) => {
  return {
    proposal: {
      idx: `${index}`
    }
  };
};

export default queryProposalByIndex;
