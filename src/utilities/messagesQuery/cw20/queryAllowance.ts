const queryAllowance = (owner: any, spender: any) => {
  // TODO: add start_after and limit parameters for pagination
  return {
    allowance: {
      owner: owner,
      spender: spender
    }
  };
};

export default queryAllowance;
