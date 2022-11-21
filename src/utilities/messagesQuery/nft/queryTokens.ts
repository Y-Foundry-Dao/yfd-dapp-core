const queryTokens = (wallet: string) => {
  return {
    tokens: {
      owner: wallet,
      start_after: '',
      limit: 30
    }
  };
};

export default queryTokens;
