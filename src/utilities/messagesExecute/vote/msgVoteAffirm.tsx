const msgVoteAffirm = (amount: number) => {
  return {
    vote_affirm: {
      amount: String(amount)
    }
  };
};

export default msgVoteAffirm;
