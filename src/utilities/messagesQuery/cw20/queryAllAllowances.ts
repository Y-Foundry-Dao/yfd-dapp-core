const queryAllowance = (owner: any) => {
  // TODO: add start_after and limit parameters for pagination
  return {
    allowance: {
      owner: owner
    }
  };
};

export default queryAllowance;
