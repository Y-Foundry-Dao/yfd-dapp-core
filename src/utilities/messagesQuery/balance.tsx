const queryBalance = (wallet: any) => {
  return {
    balance: {
      address: `${wallet}`
    }
  };
};

export default queryBalance;
