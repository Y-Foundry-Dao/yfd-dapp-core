const msgVoteAffirmWithPenalty = (amount: number) => {
  return {
    vote_affirm_with_penalty: {
      amount: String(amount)
    }
  };
};

export default msgVoteAffirmWithPenalty;
