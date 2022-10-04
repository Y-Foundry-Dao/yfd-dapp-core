const msgVoteDenyWithPenalty = (amount: number) => {
  return {
    vote_deny_with_penalty: {
      amount: String(amount)
    }
  };
};

export default msgVoteDenyWithPenalty;
