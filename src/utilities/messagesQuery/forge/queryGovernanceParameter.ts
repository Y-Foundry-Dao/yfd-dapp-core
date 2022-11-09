const queryBalanceDetail = (governanceParameter: any) => {
  return {
    governance_parameter: {
      name: `${governanceParameter}`
    }
  };
};

export default queryBalanceDetail;
