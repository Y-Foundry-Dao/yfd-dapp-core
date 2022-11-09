const queryTokenWhitelist = (address: any) => {
  return {
    token_whitelist: {
      name: `${address}`
    }
  };
};

export default queryTokenWhitelist;
