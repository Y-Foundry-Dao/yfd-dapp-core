const queryGovernanceParameter = (governanceParameter: string) => {
  return {
    governance_parameter: {
      name: `${governanceParameter}`
    }
  };
};

export default queryGovernanceParameter;
