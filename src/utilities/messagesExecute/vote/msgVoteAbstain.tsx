const msgVoteAbstain = (amount: number) => {
  return {
    vote_abstain: {
      amount: String(amount)
    }
  };
};

export default msgVoteAbstain;
