const msgVoteDeny = (amount: number) => {
  return {
    vote_deny: {
      amount: String(amount)
    }
  };
};

export default msgVoteDeny;
