const queryBalanceDetails = (wallet: any) => {
  return {
    balance_details: {
      address: `${wallet}`
    }
  };
};

export default queryBalanceDetails;
