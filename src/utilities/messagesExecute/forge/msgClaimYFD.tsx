const msgClaimYFD = (stakeIndex: string) => {
  return {
    claim: {
      stake_idx: stakeIndex
    }
  };
};

export default msgClaimYFD;
