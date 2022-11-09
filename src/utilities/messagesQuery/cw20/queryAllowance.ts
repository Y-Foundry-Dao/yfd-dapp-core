const queryAllowance = (owner: any, spender: any) => {
  return {
    allowance: {
      owner: owner,
      spender: spender
    }
  };
};

export default queryAllowance;
