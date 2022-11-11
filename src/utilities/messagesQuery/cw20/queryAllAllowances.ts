const queryAllAllowances = (owner: any) => {
  // TODO: handle Pagination by adding start_after and limit parameters
  return {
    all_allowances: {
      owner: owner
    }
  };
};

export default queryAllAllowances;
